import React from 'react';
import { AlertTriangle, Sparkles } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

// 定义API返回的结果类型
type ResultData = {
  score: number;
  suggestion: string;
  issues_detected?: string[];
  example_images: {
    range: string;
    imageUrl: string;
  }[];
};

type ResultDisplayProps = {
  result: ResultData;
  onAnalyzeAnother: () => void;
};

const ResultDisplay = ({ result, onAnalyzeAnother }: ResultDisplayProps) => {
  const hasIssues = result.issues_detected && result.issues_detected.length > 0;

  // 将issues代码转换为用户友好的消息
  const getIssueMessage = (issueCode: string): string => {
    const issueMessages: Record<string, string> = {
      'filter_detected': 'Filter detected, result may be inaccurate.',
      'pose_off_center': 'Face not centered, result may be inaccurate.',
      'low_resolution': 'Low resolution image, result may be inaccurate.',
      'poor_lighting': 'Poor lighting conditions, result may be inaccurate.',
      'multiple_faces': 'Multiple faces detected, result for dominant face.',
      'face_partially_visible': 'Face partially visible, result may be inaccurate.'
    };
    
    return issueMessages[issueCode] || 'Issue detected, result may be inaccurate.';
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-lg border border-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-4">YOUR RESULT</h1>
      
      <div className="bg-white rounded-md border border-gray-200 p-6 mb-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <h2 className={`text-6xl font-bold ${hasIssues ? 'opacity-70' : ''} text-blue-500`}>
              {result.score.toFixed(1)}
            </h2>
            
            {hasIssues && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="absolute -right-8 top-2"
                      aria-label="Warning: There are issues with the analysis"
                    >
                      <AlertTriangle className="h-6 w-6 text-amber-400" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs bg-white border border-gray-200 text-gray-700 rounded-md">
                    <div className="space-y-1 text-sm">
                      {result.issues_detected?.map((issue, index) => (
                        <p key={index}>{getIssueMessage(issue)}</p>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <div className="mb-6 text-center">
            <p className="text-gray-700">{result.suggestion}</p>
          </div>

          <div className="w-full">
            <p className="text-sm font-medium text-gray-700 mb-3 text-center">Example faces in different score ranges:</p>
            <div className="grid grid-cols-3 gap-4">
              {result.example_images.map((example, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-full pt-[100%] bg-gray-50 rounded-md overflow-hidden border border-gray-200 shadow-sm">
                    <img 
                      src={example.imageUrl} 
                      alt={`Example face: ${example.range} score range`} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm mt-2 font-medium text-blue-500">{example.range} Range</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button 
        onClick={onAnalyzeAnother} 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md border-0 transition-colors flex items-center justify-center"
      >
        <Sparkles className="h-5 w-5 mr-2" />
        Analyze Another Photo
      </Button>
    </div>
  );
}

export default ResultDisplay; 