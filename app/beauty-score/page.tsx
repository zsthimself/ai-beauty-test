"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ChevronRight, AlertCircle } from "lucide-react";

export default function BeautyScore() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
        Understanding Your Beauty Score
      </h1>
      
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
        <p className="text-lg text-gray-600 mb-6">
          Our AI Beauty Test provides you with a score on a scale from 1 to 10. This score is based on objective facial features analysis using advanced AI technology. Here's how to interpret your results.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Beauty Score Scale</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-16 text-center font-bold text-blue-500">9-10</div>
              <div className="ml-4">
                <div className="font-medium">Exceptional</div>
                <p className="text-sm text-gray-600">Highly symmetric features with ideal proportions and harmony</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 text-center font-bold text-blue-500">7-8</div>
              <div className="ml-4">
                <div className="font-medium">Very Attractive</div>
                <p className="text-sm text-gray-600">Strong facial harmony with good symmetry and proportions</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 text-center font-bold text-blue-500">5-6</div>
              <div className="ml-4">
                <div className="font-medium">Average to Attractive</div>
                <p className="text-sm text-gray-600">Balanced features with some asymmetry or disproportions</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 text-center font-bold text-blue-500">3-4</div>
              <div className="ml-4">
                <div className="font-medium">Below Average</div>
                <p className="text-sm text-gray-600">More pronounced asymmetry or disharmony between features</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 text-center font-bold text-blue-500">1-2</div>
              <div className="ml-4">
                <div className="font-medium">Significant Deviation</div>
                <p className="text-sm text-gray-600">Major asymmetry or disproportion in facial features</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">What We Analyze</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Facial Symmetry:</strong> The balance between the left and right sides of your face</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Golden Ratio Proportions:</strong> How closely your facial measurements match the ideal 1:1.618 ratio</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Facial Harmony:</strong> How well your facial features work together</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600"><strong>Feature Analysis:</strong> Individual assessment of eyes, nose, lips, jawline, and other key features</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-700 mb-2">Important Note</h3>
              <p className="text-sm text-gray-600">
                Beauty is subjective and influenced by cultural, personal, and social factors. Our AI provides one perspective based on algorithmic analysis of facial features. Your true value extends far beyond physical appearance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors">
            Try the AI Beauty Test <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
} 