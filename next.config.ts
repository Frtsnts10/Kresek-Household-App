import withPWA from "next-pwa";

const nextConfig = withPWA({
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Use the SWC compiler for minification
  pwa: {
    dest: "public", // Directory to output PWA assets like service workers
    register: true, // Automatically register the service worker
    skipWaiting: true, // Skip waiting and activate the new service worker immediately
  },
});

export default nextConfig;
