import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                // use your Supabase project host, or derive it:
                hostname: new URL(process.env.NEXT_PUBLIC_SUPABASE_URL!).host,
                pathname: "/storage/v1/object/public/**",
            },
        ],
    },
};

export default nextConfig;
