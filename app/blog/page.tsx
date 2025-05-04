import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'AI Beauty Test Blog | Face Beauty Analysis Tips',
  description: 'Explore insights about AI facial beauty analysis, professional advice on improving your attractiveness score, and cultural differences in beauty standards.',
  keywords: 'facial attractiveness, AI beauty test, beauty tips, global beauty standards, face analysis',
  openGraph: {
    title: 'AI Beauty Test Blog',
    description: 'Insights and tips about facial attractiveness and beauty analysis',
    url: 'https://ai-beauty-test.com/blog',
    siteName: 'AI Beauty Test',
    images: [
      {
        url: '/images/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Beauty Test Blog'
      }
    ],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">AI Beauty Blog</h1>
      <p className="text-center text-gray-600 mb-12">Exploring the science and art of facial beauty</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {post.frontmatter.image && (
              <div className="relative h-48 w-full">
                <Image 
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.frontmatter.date}</p>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.frontmatter.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No blog posts found. Check back soon!</p>
        </div>
      )}
    </div>
  );
} 