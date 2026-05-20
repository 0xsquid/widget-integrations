/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  webpack(config) {
    config.externals.push("pino-pretty")

    return config
  }
}

export default nextConfig
