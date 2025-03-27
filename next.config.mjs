import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
};
export default withNextra(nextConfig)