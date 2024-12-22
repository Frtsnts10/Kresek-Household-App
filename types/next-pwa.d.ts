declare module "next-pwa" {
  import { NextConfig } from "next";
  export default function withPWA(nextConfig: NextConfig): NextConfig;
}
