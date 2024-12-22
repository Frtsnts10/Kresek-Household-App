import withPWA from "next-pwa";

const nextConfig = withPWA({
  pwa: {
    dest: "public", // Output directory for service worker
    register: true, // Auto-register the service worker
    skipWaiting: true, // Activate updated service worker immediately
  },
  reactStrictMode: true, // Ensure strict mode is enabled for React
  swcMinify: true, // Enable SWC-based minification for faster builds
});

export default nextConfig;
