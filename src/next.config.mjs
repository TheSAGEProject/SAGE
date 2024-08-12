/** 
 * @type 
 * {import('next').NextConfig} */ 
const nextConfig = { 
  images: { 
    domains: ['lh3.googleusercontent.com'], 
  }, 
};

export default nextConfig;
/*
/** @type {import('next').NextConfig} 
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
  }

  images: {
    domains: ...,
    path: `${basePath}/_next/image`,
  }

  module.exports = {
    images: {
      //domains: ['lh3.googleusercontent.com'], // Add other domains if needed
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/**',
        },
    },
  };

  //lh3.googleusercontent.com

  export default nextConfig;
  */