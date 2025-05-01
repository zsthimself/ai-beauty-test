export type AnalysisResult = {
  score: number;
  suggestion: string;
  issues_detected?: string[];
  example_images: {
    range: string;
    imageUrl: string;
  }[];
};

export type AnalysisError = {
  error_code: 'NO_FACE_DETECTED' | 'PROCESSING_TIMEOUT' | string;
  error_message: string;
};

// 分析照片函数
export async function analyzeFace(
  photo: File, 
  progressCallback: (progress: number) => void, 
  abortSignal?: AbortSignal
): Promise<AnalysisResult> {
  // 创建FormData对象，用于发送文件
  const formData = new FormData();
  formData.append('photo', photo);

  // 模拟进度更新 - 在真实实现中，这可能通过接收服务器发送的进度事件来完成
  // 这里仅为示例
  const progressInterval = setInterval(() => {
    const randomProgress = Math.min(95, Math.floor(Math.random() * 10) + 10);
    progressCallback(randomProgress);
  }, 500);

  try {
    // 设置超时 30 秒
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    
    // 结合调用方提供的 abortSignal 和内部的 abortController
    // 任一中断都会取消请求
    const signal = abortSignal 
      ? composeAbortSignals(abortSignal, controller.signal) 
      : controller.signal;

    // 发送请求到API端点
    const response = await fetch('/api/analyze', {
      method: 'POST',
      body: formData,
      signal
    });

    clearTimeout(timeoutId);
    
    if (!response.ok) {
      const errorData = await response.json() as AnalysisError;
      throw new Error(errorData.error_code || 'UNKNOWN_ERROR');
    }

    // 模拟100%进度
    progressCallback(100);
    
    // 解析并返回结果
    return await response.json() as AnalysisResult;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('PROCESSING_TIMEOUT');
    }
    throw error;
  } finally {
    clearInterval(progressInterval);
  }
}

// 组合多个 AbortSignal
function composeAbortSignals(...signals: AbortSignal[]): AbortSignal {
  const controller = new AbortController();
  
  for (const signal of signals) {
    if (signal.aborted) {
      controller.abort();
      break;
    }
    
    signal.addEventListener('abort', () => {
      controller.abort();
    }, { once: true });
  }
  
  return controller.signal;
} 