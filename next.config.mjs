/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 在生产构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在生产构建时忽略TypeScript错误
    ignoreBuildErrors: true,
  },
  // 启用webpack分块优化
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 20 * 1024 * 1024, // 20MB
      minSize: 20000,
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          name: 'framework',
          test: /[\\/]node_modules[\\/](@react|react|react-dom|next)[\\/]/,
          priority: 40,
        },
        lib: {
          test: /[\\/]node_modules[\\/](?!(@react|react|react-dom|next)[\\/])/,
          priority: 30,
          name(module) {
            const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
            if (!match) return 'lib';
            return `lib-${match[1].replace('@', '')}`;
          },
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: 20,
        },
      },
    };
    return config;
  },
};

export default nextConfig; 