/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['qph.cf2.quoracdn.net']
  }
}

module.exports = nextConfig
