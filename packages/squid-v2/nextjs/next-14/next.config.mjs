/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@0xsquid/widget", "@0xsquid/react-hooks"],
  swcMinify: false,
  webpack(config) {
    config.externals.push("pino-pretty")

    return config
  }
}

export default nextConfig
