'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Info, BarChart, Sparkles, Brain, Scale, LineChart, UserCheck, ThumbsUp } from 'lucide-react';

export default function BeautyScoreExplained() {
  const [openSection, setOpenSection] = useState<number>(0);
  
  const toggleSection = (index: number) => {
    if (openSection === index) {
      setOpenSection(-1);
    } else {
      setOpenSection(index);
    }
  };
  
  // Beauty Score explanation content
  const scoreRanges = [
    {
      range: "9-10",
      description: "Exceptional Beauty",
      explanation: "This score range represents nearly perfect harmony and balance of facial features. Such a high score typically means facial features display extremely high symmetry, golden ratio proportions, and overall harmony. People in this range are rare and often have careers in beauty and fashion industries."
    },
    {
      range: "8-8.9",
      description: "Very Attractive",
      explanation: "This range indicates highly balanced facial features that are very attractive. The face exhibits excellent symmetry, elegant facial contours, and harmonious features. People within this score range typically stand out in crowds and are considered very attractive."
    },
    {
      range: "7-7.9",
      description: "Notably Attractive",
      explanation: "This range represents facial features that are overall very harmonious and notably above average. There may be slight imperfections, but the overall appearance is very attractive with good facial harmony and balance."
    },
    {
      range: "6-6.9",
      description: "Attractive",
      explanation: "This range indicates facial features that are generally harmonious and attractive, slightly above average. There may be some imbalances or imperfections, but the overall appearance remains attractive. This score range is fairly common."
    },
    {
      range: "5-5.9",
      description: "Average",
      explanation: "This range represents average levels of facial harmony and attractiveness. Facial features are generally balanced but may have some noticeable asymmetry or proportion inconsistencies. Most people score within this range."
    },
    {
      range: "4-4.9",
      description: "Below Average",
      explanation: "This score range indicates facial features with some imbalances or disharmony, below average beauty level. There may be more noticeable asymmetry or proportion imbalances."
    },
    {
      range: "3-3.9",
      description: "Significantly Below Average",
      explanation: "This range indicates facial features with notable imbalances or disharmony, well below average beauty level. The face may have obvious asymmetry, proportion imbalances, or other significant characteristics."
    },
    {
      range: "1-2.9",
      description: "Very Low Harmony",
      explanation: "This score range indicates severely imbalanced or disharmonious facial features. Scores in this range are typically associated with pronounced facial asymmetry or severe disproportion."
    }
  ];
  
  // Beauty score factors
  const beautyFactors = [
    {
      icon: <Scale className="w-10 h-10 text-blue-500" />,
      title: "Facial Symmetry",
      description: "Humans are naturally drawn to symmetrical faces. Our AI measures the balance between the left and right sides of your face, calculating a symmetry index as an important indicator in your beauty score."
    },
    {
      icon: <BarChart className="w-10 h-10 text-blue-500" />,
      title: "Golden Ratio",
      description: "The golden ratio of 1:1.618 has been considered the most beautiful proportion throughout history. We analyze the proportions between your facial features, such as the ratio of eye-to-mouth distance compared to nose-to-chin distance."
    },
    {
      icon: <LineChart className="w-10 h-10 text-blue-500" />,
      title: "Facial Contour",
      description: "The shape of your chin, contour of your cheeks, width of your forehead, and other factors all affect overall aesthetics. Our AI analyzes the smoothness and proportions of these contours."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-blue-500" />,
      title: "Feature Harmony",
      description: "The proportional harmony between facial features (eyes, nose, mouth, chin). How these features work together affects overall aesthetics."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-500" />,
      title: "Skin Quality",
      description: "Skin texture, radiance, and evenness are also important components of beauty. Our AI analyzes skin tone evenness and texture."
    }
  ];
  
  // Algorithm explanation section
  const algorithmSections = [
    {
      title: "Deep Learning Technology",
      content: "Our AI beauty analyzer uses state-of-the-art deep learning technology, trained on hundreds of thousands of facial images. It employs convolutional neural networks (CNNs) to identify, map, and analyze facial features."
    },
    {
      title: "Multiple Standards",
      content: "Our algorithm considers multiple aesthetic standards rather than relying solely on a single cultural aesthetic. Through extensive training data, we strive to reduce cultural and racial bias, providing a more fair assessment."
    },
    {
      title: "Facial Recognition Technology",
      content: "The system first uses facial recognition technology to locate the face, determine facial boundaries and key points (such as the position of eyes, nose, mouth). This provides the foundation for subsequent detailed analysis."
    },
    {
      title: "Feature Extraction",
      content: "After identifying the face, our AI extracts 68 key points, measures distances, angles, and proportions between these points, calculates facial symmetry, measures key facial proportions, and compares them with aesthetic golden ratios."
    },
    {
      title: "Comprehensive Scoring",
      content: "The final score is a weighted average of subcategory scores. The weights of different features are determined by analyzing which factors correlate most strongly with human perception of beauty."
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
              <li><Link href="/ai-beauty-analyzer" className="text-gray-600 hover:text-blue-500">AI Technology</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-blue-500">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-10 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
              Understanding Your <span className="relative inline-block">
                <span className="relative z-10">Beauty Score</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn in detail how our AI evaluates facial features, what your score means, and the science behind our rating system
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-transform hover:translate-y-[-2px]">
                Test Your Beauty Score Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/how-normal-am-i" className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md font-medium flex items-center justify-center transition-transform hover:translate-y-[-2px]">
                Try "How Normal Am I" Test
              </Link>
            </div>
          </div>
        </section>

        {/* What is Beauty Score Section */}
        <section className="py-12 bg-gray-50 rounded-3xl mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Beauty Score?</h2>
              <p className="text-lg text-gray-600 mb-6">
                A beauty score is a rating from 1-10 that represents the harmony, symmetry, and overall aesthetic quality of facial features. This score is based on our advanced AI algorithm that analyzes multiple facial features and their relationships.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                It's important to understand that beauty is subjective and influenced by culture, era, and personal preferences. While our AI provides an objective facial analysis, this is just one aspect of beauty. Personality, confidence, and inner qualities are equally, if not more important.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Remember: Beauty Is More Than a Number</h3>
                    <p className="text-gray-600">
                      Our Beauty Score is just an objective measurement based on facial features and should not be viewed as a comprehensive judgment of a person's value or attractiveness. True beauty comes from confidence, personality, and inner qualities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Score Ranges Section */}
        <section className="py-12 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Beauty Score Range Explained</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our beauty scores range from 1 to 10, with each range representing a different level of facial feature harmony. Here's a detailed explanation of each score range:
              </p>
              
              <div className="space-y-4">
                {scoreRanges.map((score, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className={`flex justify-between items-center p-4 cursor-pointer ${openSection === index ? 'bg-blue-50' : 'bg-white'}`}
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${index < 2 ? 'bg-blue-500' : index < 4 ? 'bg-blue-400' : index < 6 ? 'bg-blue-300' : 'bg-gray-400'}`}>
                          {score.range}
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-800">{score.description}</h3>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSection === index ? 'rotate-180' : ''}`} />
                    </div>
                    
                    {openSection === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{score.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Factors Affect Beauty Score Section */}
        <section className="py-12 bg-gray-50 rounded-3xl mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Factors Affecting Your Beauty Score</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI analyzes multiple facial features and their relationships. Here are the main factors that influence your beauty score:
              </p>
              
              <div className="space-y-6">
                {beautyFactors.map((factor, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {factor.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{factor.title}</h3>
                      <p className="text-gray-600">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Science Behind Section */}
        <section className="py-12 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Science Behind Our Algorithm</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI beauty analyzer uses sophisticated algorithms to evaluate facial features. Here's a technical explanation of how it works:
              </p>
              
              <div className="space-y-4">
                {algorithmSections.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-4 cursor-pointer"
                      onClick={() => toggleSection(index + scoreRanges.length)}
                    >
                      <h3 className="font-medium text-gray-800">{section.title}</h3>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSection === index + scoreRanges.length ? 'rotate-180' : ''}`} />
                    </div>
                    
                    {openSection === index + scoreRanges.length && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{section.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-500 rounded-3xl mb-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Beauty Score?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Upload your photo to get a detailed facial analysis and personalized beauty score. It's completely free and instant!
            </p>
            <Link href="/" className="bg-white text-blue-500 px-8 py-4 rounded-md font-medium inline-flex items-center transition-transform hover:translate-y-[-2px]">
              Take the Test Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
                Using AI technology to analyze facial features and understand your beauty score and facial harmony.
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