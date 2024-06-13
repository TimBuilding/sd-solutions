const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'pfodcansnwmjzknylpqu.supabase.co',
        protocol: 'https',
        pathname: '/storage/v1/object/public/announcements/**',
      },
      { hostname: '127.0.0.1' },
    ],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
