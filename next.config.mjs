/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for optimal SEO
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes for better compatibility
  trailingSlash: true,

  // Base path configuration (if needed)
  basePath: '',
};

export default nextConfig;
