import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

// 处理照片分析请求
export async function POST(request: NextRequest) {
  try {
    // 模拟API延迟
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 获取表单数据
    const formData = await request.formData();
    const photo = formData.get('photo') as File | null;

    // 检查是否有文件上传
    if (!photo) {
      return NextResponse.json(
        { 
          error_code: 'NO_FILE_UPLOADED', 
          error_message: 'No file was uploaded.' 
        }, 
        { status: 400 }
      );
    }

    // 检查文件类型
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(photo.type)) {
      return NextResponse.json(
        { 
          error_code: 'INVALID_FILE_TYPE', 
          error_message: 'File type not supported. Please upload JPG, PNG or WebP.' 
        }, 
        { status: 400 }
      );
    }

    // 检查文件大小 (3MB)
    const maxSize = 3 * 1024 * 1024;
    if (photo.size > maxSize) {
      return NextResponse.json(
        { 
          error_code: 'FILE_TOO_LARGE', 
          error_message: 'File size exceeds the 3MB limit.' 
        }, 
        { status: 400 }
      );
    }

    // 随机选择一个问题来模拟错误情况 (10%概率)
    if (Math.random() < 0.10) {
      const errorCodes = ['NO_FACE_DETECTED', 'PROCESSING_TIMEOUT'];
      const randomErrorCode = errorCodes[Math.floor(Math.random() * errorCodes.length)];
      
      const errorMessages = {
        'NO_FACE_DETECTED': 'Could not detect a clear face. Please ensure the photo is front-facing and unobstructed.',
        'PROCESSING_TIMEOUT': 'The analysis process took too long. Please try again with a smaller image or better connection.'
      };
      
      return NextResponse.json(
        { 
          error_code: randomErrorCode, 
          error_message: errorMessages[randomErrorCode as keyof typeof errorMessages] 
        }, 
        { status: 422 }
      );
    }

    // 模拟分析结果
    // 生成随机分数 (1.0 到 10.0)
    const score = Math.round((Math.random() * 9 + 1) * 10) / 10;
    
    // 随机选择是否添加问题警告 (30%概率)
    const hasIssues = Math.random() < 0.3;
    const possibleIssues = [
      'filter_detected',
      'pose_off_center',
      'low_resolution',
      'poor_lighting',
      'multiple_faces',
      'face_partially_visible'
    ];
    
    // 随机选择1-2个问题
    const issues_detected = hasIssues
      ? possibleIssues
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.floor(Math.random() * 2) + 1)
      : undefined;
    
    // 根据分数生成建议
    const suggestions = [
      "Consider adjusting lighting to highlight your facial features better.",
      "Try experimenting with different facial expressions to enhance your natural charm.",
      "Your facial symmetry is appealing. Consider hairstyles that frame your face well.",
      "Your features are harmonious. Consider minimalistic styling to showcase natural beauty.",
      "Highlight your eyes more as they are a standout feature.",
      "Consider styles that accentuate your distinctive facial structure.",
      "Your facial proportions are well-balanced. Maintain skin health to enhance this natural advantage.",
      "Try adjusting your hairstyle to better balance facial symmetry.",
      "Consider angles that highlight the strength of your jawline.",
      "Your facial features have good harmony. Consider enhancing your eyebrows to frame your face better."
    ];
    
    // 随机选择一个建议
    const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    // 生成示例图片URL
    const example_images = [
      { range: "1-3", imageUrl: "/1~3.jpg" },
      { range: "4-6", imageUrl: "/4~6.jpg" },
      { range: "7-9", imageUrl: "/7~9.jpg" }
    ];
    
    // 返回分析结果
    return NextResponse.json({
      score,
      suggestion,
      issues_detected,
      example_images
    });
    
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { 
        error_code: 'UNKNOWN_ERROR', 
        error_message: 'An unexpected error occurred during analysis.' 
      }, 
      { status: 500 }
    );
  }
} 