const path = require(`path`)

module.exports = {
    siteMetadata: {
      title: `Food Challenge`,
    },
    plugins: [
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: path.join(__dirname, `src`, `images`),
            },
        },
    ],
  }