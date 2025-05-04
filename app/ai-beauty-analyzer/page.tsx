'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Brain, Zap, Database, Shield, Code, Share2 } from 'lucide-react';

export default function AIBeautyAnalyzer() {
  const [activeSection, setActiveSection] = useState<number | null>(0);
  
  const toggleSection = (index: number) => {
    if (activeSection === index) {
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
  };
  
  // AI Technology sections
  const techSections = [
    {
      title: "Neural Networks & Deep Learning",
      content: "Our beauty analyzer uses convolutional neural networks (CNNs) trained on diverse facial datasets. These networks consist of multiple layers that progressively extract higher-level features from facial images, from simple edges to complex facial structures. Our model utilizes a modified ResNet architecture with attention mechanisms to focus on the most relevant facial features."
    },
    {
      title: "Facial Landmark Detection",
      content: "The system begins by identifying 68 key facial landmarks that map the structure of your face. These points mark crucial features like the contours of your eyes, nose, lips, jawline, and eyebrows. The precise positioning of these landmarks allows our AI to analyze facial symmetry and proportional relationships accurately."
    },
    {
      title: "Golden Ratio Analysis",
      content: "Our algorithm measures various facial proportions against the classical golden ratio (approximately 1:1.618), which has been associated with aesthetic appeal throughout art history. We calculate multiple ratio relationships between facial features to determine how closely they align with these historically 'ideal' proportions."
    },
    {
      title: "Symmetry Calculation",
      content: "Facial symmetry is a key component of perceived attractiveness. Our AI creates a virtual mirror line down the center of your face and compares the left and right sides for similarity in features, proportions, and alignment. The system calculates a symmetry coefficient that contributes to your overall beauty score."
    },
    {
      title: "Feature Harmony Analysis",
      content: "Beyond individual features, our AI evaluates how well all your facial elements work together as a cohesive whole. This involves analyzing the spatial relationships between features and how they complement each other, as the harmony between features often contributes more to perceived attractiveness than any single feature."
    }
  ];
  
  // AI Features 
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "Advanced AI Technology",
      description: "Our beauty analyzer uses state-of-the-art deep learning models trained on diverse datasets to ensure accuracy and fairness across all ethnicities and genders."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Real-time Processing",
      description: "Get your beauty score in seconds thanks to our optimized algorithms and cloud processing infrastructure that can analyze facial features instantly."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-500" />,
      title: "Comprehensive Analysis",
      description: "We don't just give you a score—our AI provides detailed insights about your facial features, proportions, symmetry, and personalized enhancement suggestions."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Privacy-First Approach",
      description: "Your photos are processed securely and never stored on our servers. All image analysis happens in real-time and data is deleted immediately after processing."
    }
  ];
  
  // FAQs about AI Technology
  const faqs = [
    {
      question: "How accurate is your AI beauty analyzer?",
      answer: "Our AI beauty analyzer has been trained on diverse datasets including thousands of faces across different ethnicities, ages, and genders. While beauty is subjective, our algorithm provides a consistent objective analysis based on universal beauty standards such as facial symmetry, golden ratio proportions, and feature harmony. In controlled tests, our AI's ratings correlate with human panel ratings at approximately 85-90% accuracy."
    },
    {
      question: "Does the AI have bias toward certain ethnicities or features?",
      answer: "We've worked extensively to minimize bias in our AI. The training datasets include diverse faces from all ethnicities, and we continuously test and refine our models to ensure fair analysis regardless of skin color, facial structure, or ethnic features. Our team regularly audits the system for any unexpected biases and makes adjustments as needed."
    },
    {
      question: "How does the AI determine what's beautiful?",
      answer: "Our AI analyzes multiple factors including facial symmetry, proportion alignment with the golden ratio, facial harmony, feature balance, and skin evenness. The algorithm doesn't impose a single standard of beauty but evaluates how harmonious and balanced your unique features are. The beauty standards incorporated are based on cross-cultural research on features that are generally perceived as attractive across different cultures and time periods."
    },
    {
      question: "What technology powers your AI beauty analyzer?",
      answer: "Our system uses convolutional neural networks (CNNs) and computer vision techniques. The technology stack includes TensorFlow and PyTorch for deep learning, OpenCV for image processing, and custom facial landmark detection models. The system runs on cloud infrastructure for real-time analysis capabilities."
    },
    {
      question: "How do you protect user privacy with AI analysis?",
      answer: "Privacy is our top priority. All photo processing happens in real-time and we don't permanently store your images. Photos are automatically deleted from our servers after analysis is complete (typically within seconds). We use end-to-end encryption for data transfer and never share your data with third parties."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-500">AI Beauty Test</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-blue-500">Beauty Test</Link></li>
              <li><Link href="/how-normal-am-i" className="text-gray-600 hover:text-blue-500">How Normal Am I</Link></li>
              <li><Link href="/beauty-score-explained" className="text-gray-600 hover:text-blue-500">Beauty Score</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-blue-500">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-10 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Technology Behind Our <span className="text-blue-500">AI Beauty Analyzer</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our advanced AI system analyzes facial features to determine beauty scores and provide personalized insights
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-3xl p-8 mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cutting-Edge AI Technology</h2>
                  <p className="text-gray-600 mb-6">
                    Our AI beauty analyzer combines deep learning neural networks, computer vision, and advanced facial recognition algorithms to analyze your unique facial features with remarkable precision.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium flex items-center transition-transform hover:translate-y-[-2px]">
                      Try It Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative rounded-xl overflow-hidden shadow-lg h-72">
                    <Image
                      src="/images/ai-technology.jpg"
                      alt="AI Beauty Analysis Technology"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                      <p className="text-white font-medium">Neural networks analyzing facial features</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our AI Works</h2>
              <p className="text-gray-600">
                Our beauty analyzer uses a sophisticated multi-step process to evaluate facial features and calculate your beauty score
              </p>
            </div>
            
            <div className="space-y-4">
              {techSections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeSection === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeSection === index && (
                    <div className="p-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-gray-50 rounded-3xl mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Features & Capabilities</h2>
              <p className="text-gray-600">
                Discover what makes our beauty analyzer technology stand out from the rest
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical FAQs</h2>
              <p className="text-gray-600">
                Common questions about our AI beauty analysis technology
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleSection(index + techSections.length)}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeSection === index + techSections.length ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeSection === index + techSections.length && (
                    <div className="p-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-500 rounded-3xl mb-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to experience our AI beauty analyzer?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Upload your photo and get a detailed analysis of your facial features and beauty score. It's free, instant, and secure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/" className="bg-white text-blue-500 px-8 py-4 rounded-md font-medium inline-flex items-center justify-center transition-transform hover:translate-y-[-2px]">
                Take the Beauty Test <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/how-normal-am-i" className="bg-blue-600 text-white px-8 py-4 rounded-md font-medium inline-flex items-center justify-center transition-transform hover:translate-y-[-2px]">
                Try "How Normal Am I" Test
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="text-xl font-bold text-blue-500 mb-4">AI Beauty Test</div>
              <p className="text-gray-500 max-w-md">
                Using advanced AI technology to analyze facial features and provide beauty scores and personalized insights.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Tests</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-500 hover:text-blue-500">Beauty Test</Link></li>
                  <li><Link href="/how-normal-am-i" className="text-gray-500 hover:text-blue-500">How Normal Am I</Link></li>
                  <li><Link href="/beauty-score-explained" className="text-gray-500 hover:text-blue-500">Beauty Score Explained</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-beauty-analyzer" className="text-gray-500 hover:text-blue-500">AI Technology</Link></li>
                  <li><Link href="/blog" className="text-gray-500 hover:text-blue-500">Blog</Link></li>
                  <li><Link href="/faq" className="text-gray-500 hover:text-blue-500">FAQ</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-blue-500">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-500">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2023 AI Beauty Test. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 