/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project. Without this, Next infers the root
  // from the nearest lockfile and picks the stray package-lock.json in the
  // parent directory, breaking module resolution (e.g. tailwindcss in CSS).
  turbopack: {
    root: import.meta.dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
