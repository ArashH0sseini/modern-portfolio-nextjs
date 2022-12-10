/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['cdn.sanity.io','qph.cf2.quoracdn.net','upload.wikimedia.org']
  }
}

module.exports = nextConfig
