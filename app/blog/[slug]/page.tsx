import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostBySlug } from '@/lib/mdx';
import { Metadata } from 'next';

// Generate metadata dynamically based on the post
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    };
  }
  
  return {
    title: `${post.frontmatter.title} | AI Beauty Test Blog`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      images: [
        {
          url: post.frontmatter.image,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [post.frontmatter.image],
    },
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const { frontmatter, content } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Blog
        </Link>
      </div>
      
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime={frontmatter.date}>{formattedDate}</time>
            <span className="mx-2">•</span>
            <span>{frontmatter.author}</span>
          </div>
          
          {frontmatter.image && (
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image 
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-8">
            {frontmatter.tags.map((tag: string) => (
              <span 
                key={tag} 
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </article>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Ready to test your beauty score?</h3>
        <p className="text-gray-600 mb-4">
          Take our AI Beauty Test to get your personalized attractiveness score and recommendations.
        </p>
        <Link 
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Take the Test Now
        </Link>
      </div>
    </div>
  );
} 