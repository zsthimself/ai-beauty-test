 "use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Brain, Shield, Server, Code } from "lucide-react";

export default function AITechnology() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
        AI Beauty Analysis Technology
      </h1>
      
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
        <p className="text-lg text-gray-600 mb-6">
          Our AI Beauty Test uses cutting-edge technology to analyze facial features and provide objective beauty assessments. Learn more about the technology behind our AI beauty analyzer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-blue-700">Neural Networks</h2>
            </div>
            <p className="text-gray-600">
              Our beauty analysis is powered by deep neural networks trained on thousands of diverse faces to recognize facial features that contribute to conventional attractiveness.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-blue-700">Privacy Protection</h2>
            </div>
            <p className="text-gray-600">
              Your photos are processed securely and never stored permanently. Our AI analyzes facial features without saving personal data, ensuring your privacy.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Server className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-blue-700">Real-time Processing</h2>
            </div>
            <p className="text-gray-600">
              Our advanced server infrastructure processes your image in seconds, mapping over 80 facial points to assess symmetry, proportion, and harmony.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-blue-700">Algorithms</h2>
            </div>
            <p className="text-gray-600">
              Our proprietary algorithms analyze facial symmetry, golden ratio proportions, feature harmony, and other objective beauty markers recognized in scientific research.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Research-Backed Analysis</h2>
          <p className="text-gray-600 mb-4">
            Our AI beauty analysis is based on extensive research in facial aesthetics, incorporating findings from studies on universal beauty standards while minimizing cultural and racial biases.
          </p>
          <p className="text-gray-600">
            We continuously improve our algorithms to provide the most accurate and fair assessments of facial attractiveness across all ethnicities and genders.
          </p>
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