module.exports = {
  siteUrl: 'https://3ksgames.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'],
  transform: async (config, path) => ({
    loc: path,
    changefreq: 'daily',
    priority: path === '/' ? 1 : 0.8,
    lastmod: new Date().toISOString(),
  })
};