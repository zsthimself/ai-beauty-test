import React from 'react';
import { AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

type ErrorCode = 'NO_FACE_DETECTED' | 'PROCESSING_TIMEOUT' | 'UNKNOWN_ERROR';

type ErrorDisplayProps = {
  errorCode: ErrorCode;
  onRetry: () => void;
  onGoBack: () => void;
};

const ErrorDisplay = ({ errorCode, onRetry, onGoBack }: ErrorDisplayProps) => {
  // 根据错误代码返回对应的错误信息
  const getErrorMessage = (): string => {
    switch (errorCode) {
      case 'NO_FACE_DETECTED':
        return 'No face detected. Please upload a clear, front-facing photo.';
      case 'PROCESSING_TIMEOUT':
        return 'Analysis timed out. Please check your connection, try compressing the image, or try again later.';
      case 'UNKNOWN_ERROR':
      default:
        return 'Analysis failed. Please try again later.';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-lg border border-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-4">OOPS!</h1>
      
      <Alert 
        variant="destructive" 
        className="mb-6 bg-red-50 border-red-300 border rounded-md shadow-none"
      >
        <AlertCircle className="h-5 w-5 text-red-500" />
        <AlertTitle className="text-red-600 font-medium">Error</AlertTitle>
        <AlertDescription className="text-red-600">{getErrorMessage()}</AlertDescription>
      </Alert>

      <div className="flex flex-col space-y-3">
        <Button 
          onClick={onRetry}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md border-0 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          Try Again
        </Button>
        
        <Button 
          variant="outline" 
          onClick={onGoBack}
          className="w-full bg-white text-gray-700 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ErrorDisplay; 