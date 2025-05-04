import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | AI Beauty Test',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="space-y-4">
        <Link 
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          Go to Homepage
        </Link>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link 
            href="/faq"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Visit FAQ
          </Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <Link 
            href="/blog"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Check our Blog
          </Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <Link 
            href="/how-normal-am-i"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Try "How Normal Am I"
          </Link>
        </div>
      </div>
    </div>
  );
} 