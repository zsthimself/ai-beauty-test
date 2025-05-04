"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowNormalAmI() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
        How Normal Am I?
      </h1>
      
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
        <p className="text-lg text-gray-600 mb-4">
          Our "How Normal Am I" test uses advanced AI technology to analyze your facial features and determine how they differ from the average.
        </p>
        
        <p className="text-lg text-gray-600 mb-6">
          How "normal" is your face compared to most people? Through our AI analysis, you can learn whether your face shape and facial feature proportions match average standards, and what makes you unique.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Coming Soon!</h2>
          <p className="text-gray-600">
            We're refining this feature and it will be available soon. In the meantime, try our AI Beauty Test to evaluate your facial attractiveness score.
          </p>
          <div className="mt-4">
            <Link href="/" className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600">
              Return to Beauty Test <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 