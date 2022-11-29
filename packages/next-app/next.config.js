const withTM = require('next-transpile-modules')(["@0xsquid/widget"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


// Please declare withTM as your last plugin (the outermost one)
module.exports = withTM(nextConfig)

