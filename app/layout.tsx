import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BlogNavigation from "@/components/ui/BlogNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Beauty Test | Face Attractiveness Score | Beauty Analyzer",
  description: "Get your face beauty score from 1-10 with our free AI beauty test. Instant analysis of facial features with personalized tips to enhance your attractiveness.",
  keywords: "face beauty test, beauty score test, ai beauty score, beauty score, attractiveness test ai, ai beauty analyzer, how normal am i, beauty scanner, ai face rater",
  openGraph: {
    title: "AI Beauty Test | Face Attractiveness Score | Beauty Analyzer",
    description: "Get your face beauty score from 1-10 with our free AI beauty test. Instant analysis of facial features with personalized tips.",
    url: "https://ai-beauty-test.com",
    siteName: "AI Beauty Test",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Beauty Test Preview"
      }
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Beauty Test | Facial Attractiveness Analysis",
    description: "Analyze your facial features with AI and get an objective attractiveness score.",
    images: ["/images/og-image.jpg"],
    creator: "@aibeautytest",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: "https://ai-beauty-test.com",
    languages: {
      'en-US': 'https://ai-beauty-test.com',
      'zh-CN': 'https://ai-beauty-test.com/zh',
    },
  },
  authors: [{ name: "AI Beauty Test Team" }],
  creator: "AI Beauty Test",
  publisher: "AI Beauty Test",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  metadataBase: new URL("https://ai-beauty-test.com"),
  verification: {
    google: "verification-code",
    yandex: "verification-code",
    yahoo: "verification-code",
    other: {
      me: ["admin@ai-beauty-test.com"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BlogNavigation />
        <main>
          {children}
        </main>
        <footer className="bg-gray-100 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">AI Beauty Test</h3>
                <p className="text-gray-600">
                  Get your face beauty score from 1-10 with our free AI beauty test.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/blog" className="text-blue-600 hover:text-blue-800">Blog</a></li>
                  <li><a href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</a></li>
                  <li><a href="/how-normal-am-i" className="text-blue-600 hover:text-blue-800">How Normal Am I</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:contact@ai-beauty-test.com" className="text-blue-600 hover:text-blue-800">Contact Us</a></li>
                  <li><a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
              <p>© {new Date().getFullYear()} AI Beauty Test. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
