module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Pen and Paper`,
    description: `The writing store that understands your needs for a stationery fix.`,
    author: `Tim Tangonan`,
    company: `Tim Tangonan Ltd`,
    companyWebsite: `https://timtangonancom`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`)
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ['src/styles/style.css', 'src/styles/global.css']
      }
    }
  ],
}
