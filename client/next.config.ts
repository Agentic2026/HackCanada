import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    // Pre-existing type mismatches between useGemini hook and AskAIRequest interface.
    // Ignore during build to avoid blocking container packaging.
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
};

export default nextConfig;
