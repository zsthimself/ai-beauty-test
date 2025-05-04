
**前端开发文档：AI 颜值测试工具 (英文站点)**

**1. 功能概述**

本功能旨在开发一个**英文**网页端 AI 颜值测试工具。用户可以上传一张符合要求的正面人脸照片，系统将通过 AI 分析面部特征（眼睛、鼻子、嘴巴、皮肤、比例），返回一个 1-10 分的颜值评分，并提供简短的改进建议和分数段对应的示例图。此工具无需用户注册或登录，**所有面向用户的文本内容均需使用英文**。

**2. 详细功能描述**

*   **UI 展示 (UI Display)**

    *   **初始/上传界面:**
        *   **主标题:** 清晰标识工具名称，如“AI Attractiveness Test” (英文)。
        *   **图片上传控件:**
            *   一个明显的按钮或拖拽区域，文本为“Select Photo”或类似 (英文)。
            *   明确支持的文件格式提示：Accepts `image/jpeg`, `image/png`, `image/webp`. (英文)。
            *   明确的文件大小限制提示：Max size 3MB. (英文)。
            *   照片要求说明文本（或链接至说明）：Clear, front-facing, no obstructions (sunglasses/masks), no filters, color photo, recommended for users 16+. (英文)。
        *   **错误提示区域:** 位于上传控件下方，初始隐藏。用于显示文件格式/大小校验失败的英文错误信息。
        *   **(可选) 分析按钮:** 如果选择文件后不立即上传，则需要一个“Analyze Attractiveness”按钮 (英文)。

    *   **分析中/加载界面:**
        *   **视觉反馈:** 隐藏上传控件，显示加载状态。
        *   **骨架屏 (Skeleton Screen):** 优先使用，模拟最终结果页面的布局。
        *   **进度指示:** 显示确定性进度指示器（如百分比“Analyzing... 65%”或进度条）(英文)。
        *   **取消按钮:** 提供一个清晰的“Cancel”按钮 (英文)。

    *   **结果展示界面:**
        *   **评分区域:**
            *   **主分数:** 显著位置以大号字体展示 1-10 的数字分数（保留一位小数）。
            *   **警告指示器 (若有):** 如果 API 返回 `issues_detected`，则：
                *   在分数数字旁显示一个“⚠️”图标。
                *   对分数数字应用视觉弱化样式（如 `opacity: 0.6`）。
                *   鼠标悬停或点击“⚠️”图标时，显示一个 Tooltip，内容为具体检测到的英文问题文本（如“Filter detected, result may be inaccurate.”, “Face not centered, result may be inaccurate.”；若有多个问题，合并或分行显示）。
        *   **改进建议区域:** 位于分数下方，展示单条由 API 返回的 `suggestion` 英文文本。
        *   **示例图区域:** 位于建议下方，水平排列展示 5 张由 API 提供的示例图片。每张图片代表一个分数段（1-2, ..., 9-10）。
        *   **重新分析按钮:** 提供一个“Analyze Another Photo”或类似按钮 (英文)，点击后返回初始上传界面。

    *   **错误状态界面 (非文件校验错误):**
        *   **通用错误:** 显示友好的英文错误提示信息（如“Analysis failed. Please try again later.”）。
        *   **特定错误:**
            *   若 API 返回 `NO_FACE_DETECTED`，显示“No face detected. Please upload a clear, front-facing photo.” (英文)。
            *   若 API 返回 `PROCESSING_TIMEOUT` 或前端请求超时 (30s)，显示“Analysis timed out. Please check your connection, try compressing the image, or try again later.” (英文)。
        *   **操作按钮:** 提供“Retry”或“Go Back”按钮 (英文)。

    *   **通用样式:**
        *   界面需响应式设计。
        *   **所有面向用户的文本（按钮、提示、标签等）需为英文，并通过 i18n 国际化库管理 (初始语言设置为英文)。**
        *   使用 **Tailwind CSS** 进行样式构建，组件风格遵循 **shadcn/ui**。

*   **交互流程 (Interaction Flow)**

    1.  **用户选择文件:** 用户点击上传按钮或拖拽文件。
    2.  **前端即时校验:**
        *   使用 JavaScript 检查 `file.type` 和 `file.size`。
        *   **校验失败:** 显示具体的英文错误信息（如“Only JPG/PNG/WebP files are allowed.”, “File size cannot exceed 3MB.” 或两者合并）。应用错误状态到上传控件。
        *   **校验成功:** 清除错误提示和状态。触发上传或启用分析按钮。
    3.  **触发分析:**
        *   显示加载界面。
        *   使用 **TanStack Query (React Query) / SWR 或 `fetch` API** 发起异步 `POST` 请求到 Next.js API Route 或 Server Action (作为后端服务的代理)。
        *   设置 30 秒超时。
    4.  **用户取消分析:**
        *   用户点击“Cancel”按钮。
        *   前端中止请求 (使用 `AbortController`)。
        *   界面返回初始状态，显示“Analysis cancelled.”提示 (英文)。
    5.  **处理 API 响应:**
        *   使用 TanStack Query / SWR 或 `fetch` 的响应处理逻辑。
        *   **成功:** 解析数据，渲染结果界面（使用 shadcn/ui 组件）。
        *   **失败/超时:** 根据错误类型，渲染对应错误状态界面（使用 shadcn/ui Alert 或 Toast 组件显示信息）。
    6.  **用户重新分析:** 点击“Analyze Another Photo”按钮，重置状态和界面。

*   **逻辑功能 (Logical Functionality)**

    *   **文件处理:** 使用浏览器 File API。
    *   **API 请求:** 通过 Next.js API Route 或 Server Action 代理对后端 AI 服务的调用。(不确定：后端 AI 服务接口细节)。
    *   **状态管理:** 使用 React `useState`, `useReducer` 或 React Context API (或可选的 Zustand/Jotai) 管理应用状态。
    *   **错误处理:** 细化处理各类错误，使用 shadcn/ui 的 `Toast` 或 `Alert` 组件展示英文反馈。
    *   **国际化:** 使用 `next-intl` 或 `react-i18next`，初始语言包设置为英文。
    *   **表单/输入处理:** 可使用 **React Hook Form** 配合 shadcn/ui 组件进行输入和校验管理（如果未来有更复杂的输入需求）。

**3. 数据模型 (Data Model)** (同上，字段内容为英文)

*   **API 请求体:**
    *   `photo`: File

*   **API 成功响应体 (示例):**
    ```json
    {
      "score": 7.7,
      "suggestion": "Try adjusting your hairstyle to better balance facial symmetry.", // 英文建议
      "issues_detected": ["pose_off_center"], // 问题代码
      "example_images": [
        {"range": "1-2", "imageUrl": "url/to/image1.jpg"},
        // ...
      ]
    }
    ```

*   **API 错误响应体 (示例):**
    ```json
    {
      "error_code": "NO_FACE_DETECTED",
      "error_message": "Could not detect a clear face. Please ensure the photo is front-facing and unobstructed." // 英文错误信息
    }
    ```

**4. 技术栈 (Technology Stack)**

*   **框架:** Next.js (v13+ App Router or Pages Router)
*   **语言:** TypeScript
*   **UI 组件库:** shadcn/ui
*   **样式:** Tailwind CSS
*   **状态管理:** React built-in (useState, useReducer, Context) / (可选: Zustand, Jotai)
*   **数据请求:** TanStack Query (React Query) / SWR / fetch API (via Next.js API Routes/Server Actions)
*   **表单处理 (可选):** React Hook Form
*   **图标:** Lucide React
*   **通知/提示:** shadcn/ui Toast (Sonner)
*   **国际化:** `next-intl` / `react-i18next` (配置为英文首选)
*   **代码规范:** ESLint, Prettier

**5. 不确定的技术细节**

*   **(不确定)** 后端 AI 服务具体的 API 端点、认证方式和精确的错误代码列表。
*   **(不确定)** 如何在前端准确检测或强制执行照片为彩色而非黑白？（可能依赖后端处理）。
*   **(不确定)** 后端 API 是否支持前端发送的取消信号。
*   **(不确定)** API 返回的 `example_images` 的具体数据结构。
*   **(不确定)** 示例图片下方是否需要明确显示其代表的分数段范围标签。
*   **(不确定)** 对低分辨率、曝光问题的具体检测阈值和后端实现细节。
*   **(不确定)** 初始固定权重的具体配置方式。