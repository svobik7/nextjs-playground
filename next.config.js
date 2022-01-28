const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/app/:path*',
        destination: 'rnhw://:path*',
        permanent: false,
      },
    ];
  },
});
