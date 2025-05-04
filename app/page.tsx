"use client";

import React, { useState, useCallback } from 'react';
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import FileUpload from '@/components/FileUpload';
import AnalysisLoading from '@/components/AnalysisLoading';
import ResultDisplay from '@/components/ResultDisplay';
import ErrorDisplay from '@/components/ErrorDisplay';
import { analyzeFace, type AnalysisResult } from '@/lib/api';
import { toast } from "sonner";
import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle, Users, ThumbsUp, ArrowRight, ChevronDown, Share2, Camera, Shield, Award } from 'lucide-react';

// Application state type
type AppState = 
  | { state: 'initial' }
  | { state: 'loading'; progress: number }
  | { state: 'success'; result: AnalysisResult }
  | { state: 'error'; errorCode: 'NO_FACE_DETECTED' | 'PROCESSING_TIMEOUT' | 'UNKNOWN_ERROR' };

export default function Home() {
  // State management
  const [appState, setAppState] = useState<AppState>({ state: 'initial' });
  const [showFaq, setShowFaq] = useState<number | null>(null);
  
  // Abort controller for request cancellation
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  
  // Handle file selection
  const handleFileSelected = useCallback(async (file: File) => {
    // Reset state
    setAppState({ state: 'loading', progress: 0 });
    
    // Create new abort controller
    const controller = new AbortController();
    setAbortController(controller);
    
    try {
      // Call API to analyze photo
      const result = await analyzeFace(
        file,
        (progress) => setAppState({ state: 'loading', progress }),
        controller.signal
      );
      
      // Update success state
      setAppState({ state: 'success', result });
    } catch (error: any) {
      console.error('Analysis error:', error);
      
      // If user cancelled, show cancel message
      if (error.name === 'AbortError' || error.message === 'cancelled') {
        setAppState({ state: 'initial' });
        toast("Analysis cancelled", {
          description: "You cancelled the analysis process.",
        });
        return;
      }
      
      // Map error code
      let errorCode: 'NO_FACE_DETECTED' | 'PROCESSING_TIMEOUT' | 'UNKNOWN_ERROR' = 'UNKNOWN_ERROR';
      if (error.message === 'NO_FACE_DETECTED') errorCode = 'NO_FACE_DETECTED';
      if (error.message === 'PROCESSING_TIMEOUT') errorCode = 'PROCESSING_TIMEOUT';
      
      // Update error state
      setAppState({ state: 'error', errorCode });
    } finally {
      // Cleanup
      setAbortController(null);
    }
  }, []);
  
  // Cancel analysis
  const handleCancel = useCallback(() => {
    if (abortController) {
      abortController.abort();
      setAbortController(null);
    }
  }, [abortController]);
  
  // Restart
  const handleRestart = useCallback(() => {
    setAppState({ state: 'initial' });
  }, []);

  // FAQ toggle
  const toggleFaq = (index: number) => {
    if (showFaq === index) {
      setShowFaq(null);
    } else {
      setShowFaq(index);
    }
  };
  
  // FAQs data
  const faqs = [
    {
      question: "How does the AI Beauty Test work?",
      answer: "Our AI Beauty Test uses advanced facial recognition algorithms to analyze various aspects of your face, including symmetry, facial proportions, skin quality, and more. The AI then evaluates these features against beauty standards to provide an attractiveness score on a scale of 1-10."
    },
    {
      question: "Is my photo stored or shared?",
      answer: "No. Your privacy is important to us. All photos are processed on our secure servers and are not saved or shared with third parties. The photos are automatically deleted after processing."
    },
    {
      question: "How accurate is the AI Beauty Test?",
      answer: "While our AI has been trained on diverse datasets to ensure fairness, beauty is ultimately subjective. The test provides an objective analysis based on facial symmetry and proportions, but should be taken as entertainment rather than absolute truth."
    },
    {
      question: "What types of photos should I upload?",
      answer: "For best results, upload a clear, front-facing photo with good lighting. Avoid photos with filters, sunglasses, masks, or other face obstructions. The photo should be in color (not black and white) and show your full face."
    },
    {
      question: "Why did I get a warning with my result?",
      answer: "Warnings appear when our AI detects potential issues that might affect accuracy, such as poor image quality, filters, multiple faces in the image, or face positioning problems. These warnings help you understand potential limitations in the analysis."
    },
    {
      question: "Can I test multiple photos to get different scores?",
      answer: "Yes! We encourage you to try different photos to see how factors like lighting, angle, and expression can affect your beauty score. This can help you understand which aspects of your appearance are most flattering."
    },
    {
      question: "What beauty standards does the AI use for evaluation?",
      answer: "Our AI is trained on a diverse dataset representing various ethnicities, ages, and genders. It evaluates universal beauty aspects like facial symmetry, golden ratio proportions, and harmony between features. We continuously update our algorithms to reduce bias and ensure fair analysis across all demographics."
    },
    {
      question: "Are there any age restrictions for using the AI Beauty Test?",
      answer: "Yes, the AI Beauty Test is intended for users who are 18 years or older. The analysis is optimized for adult facial features and may not provide accurate results for minors."
    },
    {
      question: "Can I compare my results with friends?",
      answer: "Absolutely! After receiving your results, you can share them with friends through social media or direct links. This can be a fun way to compare scores and beauty enhancement tips. Remember that beauty is subjective, and our AI provides just one perspective."
    },
    {
      question: "Is the AI Beauty Test free to use?",
      answer: "Yes, the basic AI Beauty Test is completely free to use. We also offer premium features for those who want more detailed analysis and personalized beauty enhancement recommendations."
    }
  ];

  // Features data
  const features = [
    {
      icon: <Star className="w-10 h-10 text-blue-500" />,
      title: "Accurate Analysis",
      description: "Our AI uses advanced facial recognition to analyze key features like symmetry, proportions, and harmony."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-500" />,
      title: "Instant Results",
      description: "Get your attractiveness score and personalized suggestions in seconds."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Fair & Objective",
      description: "Our AI is trained on diverse faces to ensure fair evaluation across all ethnicities and genders."
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-blue-500" />,
      title: "Helpful Suggestions",
      description: "Receive practical tips to enhance your natural features based on your unique facial structure."
    }
  ];
  
  // Render UI
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Toaster 
          position="top-center" 
          toastOptions={{
            style: {
              background: 'white',
              border: '1px solid #e5e7eb',
              boxShadow: 'none',
              borderRadius: '0.375rem',
            }
          }}
        />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="py-10 md:py-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                #1 AI Beauty Test Tool | 10,000+ Users
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
                Discover Your <span className="relative inline-block">
                  <span className="relative z-10">Beauty Score</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 z-0"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Our AI analyzes your facial features to determine your attractiveness on a scale from 1 to 10. Get insights on how to enhance your natural beauty.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">100% Privacy Protection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Results in 30 Seconds</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Improvement Tips</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Free to Use</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#test-now" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium flex items-center transition-transform hover:translate-y-[-2px]">
                  Try It Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#how-it-works" className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md font-medium flex items-center hover:bg-blue-50 transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-200 rounded-full z-0"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-50 rounded-full blur-xl z-0 opacity-70"></div>
                <div className="relative z-10 bg-white p-2 border border-gray-100 rounded-lg shadow-md">
                  <img 
                    src="/hero-image.jpg" 
                    alt="AI Beauty Test Example - Facial Analysis and Rating" 
                    className="rounded-md w-full"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.src = "https://via.placeholder.com/500x400/f0f9ff/3b82f6?text=AI+Beauty+Test";
                    }}
                  />
                  <div className="absolute -bottom-5 -right-5 bg-white shadow-lg rounded-lg py-2 px-4 flex items-center">
                    <div className="mr-2 text-3xl font-bold text-blue-500">8.7</div>
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">Beauty Score</div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Stats Section */}
          <section className="py-8 border-y border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">10,000+</div>
                <div className="text-gray-500">Users Tested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">99%</div>
                <div className="text-gray-500">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">30 Sec</div>
                <div className="text-gray-500">Average Test Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">4.8/5</div>
                <div className="text-gray-500">User Satisfaction</div>
              </div>
            </div>
          </section>

          {/* Test Section */}
          <section id="test-now" className="py-10 md:py-16 flex justify-center">
            {appState.state === 'initial' && (
              <FileUpload 
                onFileSelected={handleFileSelected} 
                isLoading={false} 
              />
            )}
            
            {appState.state === 'loading' && (
              <AnalysisLoading 
                progress={appState.progress} 
                onCancel={handleCancel} 
              />
            )}
            
            {appState.state === 'success' && (
              <ResultDisplay 
                result={appState.result} 
                onAnalyzeAnother={handleRestart} 
              />
            )}
            
            {appState.state === 'error' && (
              <ErrorDisplay 
                errorCode={appState.errorCode} 
                onRetry={() => handleRestart()} 
                onGoBack={() => handleRestart()} 
              />
            )}
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-10 md:py-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-4">How Our AI Beauty Test Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our advanced AI system evaluates your facial features using computer vision
                technology to provide objective feedback on your attractiveness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Camera className="text-blue-500 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">1. Upload Your Photo</h3>
                  <p className="text-gray-600 mb-4">
                    Simply upload a clear, front-facing photo of yourself. For best results, 
                    use a photo with good lighting and no filters.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Use natural lighting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Avoid heavy makeup or filters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Face directly toward the camera</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Shield className="text-blue-500 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">2. AI Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Our AI scans your facial features, analyzing symmetry, proportions, 
                    facial harmony, and other beauty markers.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Analysis of 80+ facial points</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Assessment of facial symmetry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Evaluation of golden ratio metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Award className="text-blue-500 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">3. Get Your Results</h3>
                  <p className="text-gray-600 mb-4">
                    Receive your beauty score on a scale of 1-10, along with personalized 
                    suggestions for enhancing your natural features.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Detailed score breakdown</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Personalized beauty tips</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>Sharing options for social media</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">The Science Behind Our AI Beauty Test</h3>
                  <p className="text-gray-600 mb-4">
                    Our AI beauty analysis is built on research analyzing thousands of faces to identify universal beauty standards. 
                    We combine classical beauty theories like the Golden Ratio with modern machine learning to provide objective, 
                    accurate assessments of facial features.
                  </p>
                  <div className="flex items-center">
                    <a href="#test-now" className="bg-blue-500 text-white px-5 py-2 rounded-md font-medium text-sm flex items-center hover:bg-blue-600 transition-colors">
                      Try it yourself <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white p-3 rounded-lg shadow-sm rotate-2">
                    <img 
                      src="/ai-analysis.jpg" 
                      alt="AI Beauty Analysis Process" 
                      className="rounded w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/300x200/f0f9ff/3b82f6?text=AI+Analysis";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="py-10 md:py-16 bg-gray-50 -mx-4 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  POWERED BY AI
                </span>
                <h2 className="text-3xl font-bold text-blue-500 mb-4">Advanced AI Technology</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our beauty test uses state-of-the-art facial recognition technology to provide accurate
                  and helpful analysis of your facial features.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] duration-300">
                    <div className="mb-5 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-blue-500 text-sm font-medium">Learn more</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="mr-2 text-blue-500 h-5 w-5" />
                    Privacy-Focused Technology
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your privacy matters to us. Our AI processes your photos instantly and never stores facial data.
                    Images are automatically deleted after analysis, and we don't share your information with third parties.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-600">Secure image processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-600">Automatic photo deletion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-600">No data sharing with third parties</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <ThumbsUp className="mr-2 text-blue-500 h-5 w-5" />
                    Scientifically Backed Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our AI beauty test is built on extensive research of facial aesthetics and beauty standards
                    across different cultures. We constantly refine our algorithms for the most accurate results.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-600">Trained on diverse dataset of 100,000+ faces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-600">Considers cultural diversity in beauty standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-600">Regular algorithm updates based on new research</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-10 md:py-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-4">What Users Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Thousands of people have already used our AI Beauty Test. Here's what they think.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "I was skeptical at first, but the analysis was surprisingly accurate. The suggestions were 
                  actually helpful and specific to my facial features."
                </p>
                <div className="font-medium">Sarah T.</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Fun and interesting! I tried photos with different lighting and angles, and the AI 
                  gave consistent scores. The tips were genuinely useful."
                </p>
                <div className="font-medium">Michael R.</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "I appreciated how the test focused on objective features rather than just 
                  cultural standards of beauty. Very interesting insights!"
                </p>
                <div className="font-medium">Jessica L.</div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-10 md:py-16">
            <div className="text-center mb-10">
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                GOT QUESTIONS?
              </span>
              <h2 className="text-3xl font-bold text-blue-500 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our AI Beauty Test and learn how to get the most accurate results.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <button 
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={showFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${showFaq === index ? 'transform rotate-180' : ''}`} />
                  </button>
                  {showFaq === index && (
                    <div 
                      id={`faq-answer-${index}`}
                      className="p-4 bg-gray-50 border-t border-gray-100"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-blue-50 p-6 rounded-lg max-w-3xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Have more questions?</h3>
                  <p className="text-sm text-gray-600">Contact us at support@aibeautytest.com or check our detailed guide</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-50 border-t border-gray-100 py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-xl font-bold text-blue-500 mb-4">AI Beauty Test</div>
                <p className="text-gray-500 mb-4">Analyze your facial attractiveness with advanced AI technology and get personalized beauty enhancement tips.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#how-it-works" className="text-gray-500 hover:text-blue-500">How It Works</a></li>
                  <li><a href="#features" className="text-gray-500 hover:text-blue-500">Features</a></li>
                  <li><a href="#faq" className="text-gray-500 hover:text-blue-500">FAQ</a></li>
                  <li><Link href="/blog" className="text-gray-500 hover:text-blue-500">Blog</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy-policy" className="text-gray-500 hover:text-blue-500">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-gray-500 hover:text-blue-500">Terms of Service</Link></li>
                  <li><Link href="/cookie-policy" className="text-gray-500 hover:text-blue-500">Cookie Policy</Link></li>
                  <li><Link href="/gdpr" className="text-gray-500 hover:text-blue-500">GDPR Compliance</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-500">support@aibeautytest.com</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <span className="text-gray-500">Live Chat (9am-5pm EST)</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="#test-now" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-600 transition-colors">
                    Try AI Beauty Test
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} AI Beauty Test. All rights reserved.
              </div>
              <div className="text-xs text-gray-400">
                Powered by advanced facial recognition technology
              </div>
            </div>
            <div className="mt-6 text-center text-gray-500 text-xs">
              <p className="max-w-3xl mx-auto">
                This AI beauty test is designed for entertainment purposes. Beauty is subjective and influenced by cultural, personal, and social factors. 
                Our AI provides one perspective based on algorithmic analysis of facial features, but true beauty encompasses much more than physical appearance.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
