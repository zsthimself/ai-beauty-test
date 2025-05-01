import React, { useState, useRef } from 'react';
import { UploadCloud, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

type FileUploadProps = {
  onFileSelected: (file: File) => void;
  isLoading: boolean;
};

const FileUpload = ({ onFileSelected, isLoading }: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (!file) {
      setError("No file selected.");
      setSelectedFile(null);
      return;
    }

    // 验证文件类型
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError("Only JPG/PNG/WebP files are allowed.");
      setSelectedFile(null);
      return;
    }

    // 验证文件大小 (3MB)
    const maxSize = 3 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("File size cannot exceed 3MB.");
      setSelectedFile(null);
      return;
    }

    // 清除错误并设置选中的文件
    setError(null);
    setSelectedFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      onFileSelected(selectedFile);
    } else {
      setError("Please select a photo first.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-lg border border-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-4">HOW HOT AM I?</h1>
      
      <p className="text-center text-gray-700 mb-8">
        Test your attractiveness by uploading a photo. Our beauty test rates your face on a scale from 1 to 10.
      </p>
      
      <div className="mb-6">
        <p className="text-gray-700 font-medium mb-2">Select your photo:</p>
        <div className="flex">
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleChange}
            accept=".jpg,.jpeg,.png,.webp"
            disabled={isLoading}
          />
          <button
            onClick={handleClick}
            disabled={isLoading}
            className="flex-1 bg-white border border-gray-200 text-left px-4 py-2 rounded-l-md font-normal text-gray-500"
          >
            {selectedFile ? selectedFile.name : '选择文件'}
          </button>
          <div className="bg-white border border-l-0 border-gray-200 rounded-r-md px-4 py-2 text-gray-500">
            {selectedFile ? '✓' : '未选择任何文件'}
          </div>
        </div>
      </div>
      
      <Button 
        onClick={handleAnalyze}
        disabled={isLoading || !selectedFile}
        className="w-full mb-6 bg-blue-500 hover:bg-blue-600 py-3 font-medium text-white flex items-center justify-center"
      >
        <Sparkles className="h-5 w-5 mr-2" /> 
        Analyze Attractiveness
      </Button>

      <div className="flex items-center justify-center text-gray-500 text-xs">
        <Shield className="h-4 w-4 mr-1" />
        <p>Photos are processed server-side. We don't save or share them.</p>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-4 bg-red-50 border-red-400 text-red-700 rounded-md border">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default FileUpload; 