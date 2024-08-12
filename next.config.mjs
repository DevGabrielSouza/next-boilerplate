import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    serverComponentsExternalPackages: ['pino', 'pino-pretty']
  }
}

export default withNextIntl(nextConfig)
