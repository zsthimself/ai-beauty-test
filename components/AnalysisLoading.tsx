import React from 'react';
import { X } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

type AnalysisLoadingProps = {
  progress: number;
  onCancel: () => void;
};

const AnalysisLoading = ({ progress, onCancel }: AnalysisLoadingProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-lg border border-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-4">ANALYZING...</h1>
      
      <div className="w-full h-48 bg-white rounded-md border border-gray-200 flex flex-col items-center justify-center mb-6">
        {/* 骨架屏 - 扁平化风格 */}
        <div className="w-full space-y-6 animate-pulse">
          <div className="h-20 bg-gray-100 rounded-md mx-8"></div>
          <div className="space-y-2 mx-8">
            <div className="h-3 bg-gray-100 rounded w-3/4 mx-auto"></div>
            <div className="h-3 bg-gray-100 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="w-full mb-6 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">Processing your photo... {progress}%</p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onCancel}
            className="text-xs flex items-center bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-700 transition-colors"
          >
            <X className="h-3 w-3 mr-1" />
            Cancel
          </Button>
        </div>
        <Progress 
          value={progress} 
          className="h-2 bg-gray-100 rounded-sm overflow-hidden" 
        />
      </div>

      <div className="flex items-center justify-center text-gray-500 text-xs">
        <p>This may take a few seconds. Please wait...</p>
      </div>
    </div>
  );
};

export default AnalysisLoading; 