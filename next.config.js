module.exports = async (phase, { defaultConfig }) => {
  const config = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '3ksgames.com',
          pathname: '/images/games/**',
        },
      ],
    },
    // Basic optimizations
    swcMinify: true,
    reactStrictMode: true,
    // Simple webpack optimization
    webpack: (config) => {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
      };
      return config;
    },
  };
  return config;
};