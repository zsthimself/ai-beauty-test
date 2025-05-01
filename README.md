# AI Attractiveness Test

A web-based AI tool for analyzing facial attractiveness. Users can upload a photo, and the AI will analyze facial features to provide a score and personalized recommendations.

## Features

- **Photo Upload**: Drag & drop or click to upload a photo
- **Real-time Validation**: Checks for file type and size constraints
- **Analysis Process**: Visual feedback during the analysis process
- **Detailed Results**: Score display with potential warnings about accuracy
- **Improvement Suggestions**: Personalized recommendations based on analysis
- **Example Images**: Comparison images for different score ranges

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useReducer)
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Language**: English

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-beauty-test.git
   cd ai-beauty-test
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Visit the homepage and click "Select Photo" or drag and drop an image file.
2. Wait for the analysis to complete (you can cancel at any time).
3. View your attractiveness score, suggestions, and example images.
4. Click "Analyze Another Photo" to start over.

## Photo Requirements

- Clear, front-facing photo
- No sunglasses, masks, or other face obstructions
- No filters or heavy editing
- Color photo (not black and white)
- Maximum file size: 3MB
- Supported formats: JPG, PNG, WebP
- Recommended for users 16+

## License

[MIT](LICENSE)

## Acknowledgments

- This project uses UI components from [shadcn/ui](https://ui.shadcn.com/)
- Photo examples from [Lorem Picsum](https://picsum.photos/)
