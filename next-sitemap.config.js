const siteUrl = 'https://laxmifaceanddental.com';


/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://laxmifaceanddental.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/api/*'],
  additionalPaths: async () => [
    { loc: '/treatments/surgical-treatments/wisdom-tooth-removal' },
    { loc: '/treatments/emergency-dentist' },
    { loc: '/treatments/orthodontics/traditional-braces' },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/*'],
      },
    ],
  },
}







