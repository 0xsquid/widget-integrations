/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withTM = require('next-transpile-modules')(['@pancakeswap/uikit', '@pancakeswap/sdk', '@defiedge/react',  '@0xsquid/widget'])
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(withTM(config))