/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@0xsquid/widget", "@0xsquid/staking-widget"],
}


// Please declare withTM as your last plugin (the outermost one)
module.exports = nextConfig

