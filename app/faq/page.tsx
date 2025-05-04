'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  
  // Toggle question expansion
  const toggleQuestion = (id: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (expandedQuestions.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };
  
  // FAQ Categories
  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'technical', name: 'Technical Questions' },
    { id: 'results', name: 'Results & Interpretation' },
    { id: 'privacy', name: 'Privacy & Security' },
    { id: 'account', name: 'Account & Usage' },
  ];
  
  // FAQ Questions and Answers
  const faqs = {
    general: [
      {
        id: 'what-is',
        question: 'What is the AI Beauty Test?',
        answer: 'The AI Beauty Test is an advanced facial analysis tool that uses artificial intelligence to analyze your facial features and provide an objective attractiveness score on a scale from 1 to 10. The test evaluates factors such as facial symmetry, proportions, feature harmony, and adherence to beauty standards derived from scientific research on human perception of attractiveness.'
      },
      {
        id: 'how-works',
        question: 'How does the AI Beauty Test work?',
        answer: 'Our AI uses deep learning algorithms trained on thousands of facial images to analyze your photo. When you upload a photo, our system identifies key facial landmarks, measures facial symmetry, evaluates proportions against the golden ratio, assesses feature harmony, and analyzes skin quality. These factors are combined using our proprietary algorithm to calculate your overall beauty score.'
      },
      {
        id: 'accurate',
        question: 'How accurate is the AI Beauty Test?',
        answer: 'While beauty is ultimately subjective, our AI provides a consistent objective analysis based on widely recognized beauty standards. Our system has been calibrated by comparing its results with human panel ratings, achieving a correlation of approximately 85-90%. However, remember that the score reflects only mathematical aspects of facial structure and doesn\'t account for personality, charisma, or individual preferences.'
      },
      {
        id: 'how-normal',
        question: 'What is the "How Normal Am I" test?',
        answer: 'The "How Normal Am I" test is a variation of our facial analysis technology that measures how closely your facial features match statistical averages rather than beauty standards. This test can reveal whether your face has common or unique characteristics compared to the general population. It\'s a fun way to discover how distinctive your facial features are.'
      },
      {
        id: 'beauty-score',
        question: 'What does my beauty score mean?',
        answer: 'Your beauty score is a numerical rating from 1 to 10 that represents how closely your facial features align with classical beauty standards based on symmetry, proportions, and harmony. A higher score indicates stronger alignment with these standards. For a detailed explanation of score ranges, visit our Beauty Score Explained page.'
      },
      {
        id: 'improve-score',
        question: 'Can I improve my beauty score?',
        answer: 'Yes! Along with your score, we provide personalized recommendations for enhancing your appearance based on your specific facial features. These might include tips about flattering hairstyles, optimal photo angles, skincare suggestions, or makeup techniques that can highlight your best features. Additionally, better photo quality, lighting, and angle can significantly improve your score.'
      }
    ],
    technical: [
      {
        id: 'photo-requirements',
        question: 'What type of photo should I upload?',
        answer: 'For best results, upload a clear, front-facing photo with good lighting and a neutral expression. Your face should be fully visible with no obstructions like sunglasses, masks, or heavy makeup effects. Avoid using photos with filters or heavy editing. The photo should be in color (not black and white) and show your face from forehead to chin.'
      },
      {
        id: 'multiple-faces',
        question: 'What happens if there are multiple people in my photo?',
        answer: 'Our AI will attempt to identify the most prominent face in the image. However, for the most accurate results, we recommend uploading a photo where you are the only person visible. Group photos may lead to incorrect analysis or errors in face detection.'
      },
      {
        id: 'device-compatibility',
        question: 'Which devices and browsers support the AI Beauty Test?',
        answer: 'Our AI Beauty Test works on all modern devices including desktops, laptops, tablets, and smartphones. We support all major browsers including Chrome, Firefox, Safari, and Edge. The test is fully responsive and optimized for both touchscreen and mouse/keyboard inputs.'
      },
      {
        id: 'errors',
        question: 'I\'m getting an error when trying to upload my photo. What should I do?',
        answer: 'Common issues include uploading files that are too large or in unsupported formats. Make sure your image is under 10MB and in JPG, PNG, or WebP format. If you\'re still experiencing problems, try using a different browser, clearing your cache, or using a different device. If problems persist, please contact our support team.'
      },
      {
        id: 'technology',
        question: 'What technology powers the AI Beauty Analyzer?',
        answer: 'Our system uses convolutional neural networks (CNNs) and advanced computer vision techniques. The technology stack includes TensorFlow and PyTorch for deep learning, custom-trained facial landmark detection models, and proprietary algorithms for beauty analysis. For more technical details, visit our AI Beauty Analyzer page.'
      }
    ],
    results: [
      {
        id: 'different-scores',
        question: 'Why do I get different scores with different photos?',
        answer: 'Your score can vary between photos due to several factors: lighting conditions, camera angle, facial expression, image quality, and styling elements like makeup or hairstyle. This actually demonstrates the tool\'s sensitivity to these factors and can help you understand which aspects of your presentation are most flattering.'
      },
      {
        id: 'traits-meaning',
        question: 'What do the different facial traits in my results mean?',
        answer: 'Each trait in your results represents a specific aspect of facial attractiveness. For example, "Symmetry" measures how balanced the left and right sides of your face are, "Harmony" assesses how well your features work together, and "Golden Ratio" evaluates how closely your facial proportions match classical beauty standards. Each trait contributes to your overall score in varying degrees.'
      },
      {
        id: 'disagree-results',
        question: 'I disagree with my score. Why might this happen?',
        answer: 'While our AI strives for objectivity, beauty remains partially subjective. Your score might differ from your self-perception or others\' opinions for several reasons: the photo quality might not be optimal, beauty standards vary across cultures and individuals, and our AI focuses on facial structure rather than personality, expressiveness, or charisma—all of which contribute to real-world attractiveness.'
      },
      {
        id: 'celebrities-score',
        question: 'How do celebrities score on the beauty test?',
        answer: 'While we don\'t publish celebrity scores without permission, our internal testing shows that most celebrities considered conventionally attractive typically score between 7.5-9.5. However, even among celebrities, scores can vary significantly based on the specific photo used. Remember that celebrities benefit from professional photography, lighting, makeup, and sometimes digital enhancement.'
      },
      {
        id: 'age-factor',
        question: 'Does age affect my beauty score?',
        answer: 'Our AI has been trained on diverse datasets including faces of various ages, and it evaluates facial features rather than age itself. However, certain age-related factors like skin texture and facial volume can influence specific trait scores. We strive to provide fair analysis across all age groups, focusing on the harmony and balance of your unique facial features regardless of age.'
      }
    ],
    privacy: [
      {
        id: 'photo-storage',
        question: 'Are my photos stored after analysis?',
        answer: 'No. We prioritize your privacy and do not permanently store your photos. When you upload a photo, it is processed in real-time on our secure servers, and the image data is automatically deleted once the analysis is complete (typically within seconds). We never share your photos with third parties.'
      },
      {
        id: 'data-collection',
        question: 'What data do you collect during the beauty test?',
        answer: 'We collect minimal data needed to provide our service: temporary image data during processing (deleted afterward), your beauty score and feature analysis (not linked to personal identity), and standard usage metrics like device type and browser. We do not require personal information such as names or email addresses to use the basic test.'
      },
      {
        id: 'data-sharing',
        question: 'Do you share my results or data with third parties?',
        answer: 'No. Your beauty test results remain private and are not shared with third parties. We may use aggregated, anonymized data for research and service improvement, but this never includes personally identifiable information or individual photos.'
      },
      {
        id: 'security-measures',
        question: 'What security measures do you have in place?',
        answer: 'We implement industry-standard security measures including: end-to-end encryption for data transfer, secure cloud servers with restricted access, automated deletion of image data after processing, regular security audits, and compliance with data protection regulations. Our system is designed with privacy as a fundamental principle.'
      },
      {
        id: 'gdpr-compliance',
        question: 'Is the AI Beauty Test GDPR compliant?',
        answer: 'Yes. Our service is designed to be compliant with GDPR and other privacy regulations. We process minimal data, maintain transparency about our practices, obtain appropriate consent, securely process data, and respect user rights regarding their personal information. For more details, please review our Privacy Policy.'
      }
    ],
    account: [
      {
        id: 'cost',
        question: 'Is the AI Beauty Test free to use?',
        answer: 'Yes, the basic AI Beauty Test is completely free to use. You can upload your photo and receive your beauty score and basic analysis at no cost. We also offer premium features for users who want more detailed analysis, personalized recommendations, or additional tests.'
      },
      {
        id: 'limitations',
        question: 'Are there any limitations on using the test?',
        answer: 'The free version has some limitations: you can analyze a limited number of photos per day, and certain detailed analysis features are reserved for premium users. Additionally, we require users to be 18 years or older, and the service should not be used to analyze photos of minors.'
      },
      {
        id: 'compare-results',
        question: 'Can I compare my results with friends or others?',
        answer: 'Yes! You can share your results with friends through our integrated social sharing options. This can be a fun way to compare scores and insights. Many users enjoy challenging friends to take the test and comparing their results. Remember that beauty is subjective, and our AI provides just one perspective.'
      },
      {
        id: 'save-results',
        question: 'Can I save my results for later?',
        answer: 'By default, your results are temporary and will not be saved after you leave the site. However, you can download your results as an image to save locally, or you can create an account to save your history and track changes over time with different photos.'
      },
      {
        id: 'premium-features',
        question: 'What additional features do premium users get?',
        answer: 'Premium users enjoy several benefits: unlimited photo analysis, detailed facial feature reports, personalized enhancement recommendations, historical result tracking, comparison tools to test different looks, and access to exclusive tests and features. Premium subscriptions help support our ongoing development.'
      }
    ]
  };
  
  // Filter FAQs based on search query
  const filterFAQs = () => {
    if (!searchQuery.trim()) {
      return faqs[activeCategory as keyof typeof faqs];
    }
    
    const query = searchQuery.toLowerCase();
    const results: any[] = [];
    
    // Search across all categories
    Object.values(faqs).forEach(categoryFaqs => {
      categoryFaqs.forEach(faq => {
        if (
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
        ) {
          results.push(faq);
        }
      });
    });
    
    return results;
  };
  
  const filteredFAQs = filterFAQs();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-500">AI Beauty Test</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-blue-500">Beauty Test</Link></li>
              <li><Link href="/how-normal-am-i" className="text-gray-600 hover:text-blue-500">How Normal Am I</Link></li>
              <li><Link href="/beauty-score-explained" className="text-gray-600 hover:text-blue-500">Beauty Score</Link></li>
              <li><Link href="/ai-beauty-analyzer" className="text-gray-600 hover:text-blue-500">AI Technology</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our AI Beauty Test, technology, privacy, and more
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Category Tabs */}
        {!searchQuery && (
          <div className="max-w-4xl mx-auto mb-8 overflow-x-auto">
            <div className="flex space-x-2 border-b border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'text-blue-600 border-b-2 border-blue-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setExpandedQuestions(new Set());
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* FAQ List */}
        <div className="max-w-4xl mx-auto mb-20">
          {searchQuery && filteredFAQs.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600">No results found for "{searchQuery}". Try a different search term.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedQuestions.has(faq.id) ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedQuestions.has(faq.id) && (
                    <div className="p-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Contact Section */}
        <div className="max-w-3xl mx-auto text-center bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Didn't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6">
            If you have additional questions or need further assistance,
            our support team is here to help.
          </p>
          <Link 
            href="mailto:support@aibeautytest.com" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
          >
            Contact Support
          </Link>
        </div>
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