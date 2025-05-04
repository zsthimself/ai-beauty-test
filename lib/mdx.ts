import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const rootDirectory = path.join(process.cwd(), 'blog');

export async function getBlogPosts() {
  const files = fs.readdirSync(rootDirectory);
  
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(rootDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, '');
      
      return {
        slug,
        frontmatter: {
          title: data.title,
          description: data.description,
          date: data.date,
          tags: data.tags || [],
          author: data.author,
          image: data.image,
        },
      };
    })
    .sort((a, b) => {
      if (new Date(a.frontmatter.date) > new Date(b.frontmatter.date)) {
        return -1;
      }
      return 1;
    });
}

export async function getBlogPostBySlug(slug: string) {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  
  const mdxSource = await compileMDX({
    source: content,
    options: { parseFrontmatter: true },
  });
  
  return {
    content: mdxSource.content,
    frontmatter: {
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      author: data.author,
      image: data.image,
    },
  };
} 