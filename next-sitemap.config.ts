/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://www.example.com',
  generateRobotsTxt: true, // (optional) generate robots.txt
  sitemapSize: 5000, // split sitemaps if you have tons of pages
  changefreq: 'weekly',
  priority: 0.7,
}

export default config
