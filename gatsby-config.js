module.exports = {
  siteMetadata: {
    title: `hareblog`,
    description: `Personal blog of Hendra Sadewa`,
    author: `Hendra 'hare' Sadewa`,
    authorShortIntro: 'FOSS and JavaScript Enthusiast, addicted to ThinkPads',
    twitter: `@sadevva_`,
    instagram: `sadevva_`,
    linkedIn: `hendra-sadewa`,
    linkedInURL: `https://www.linkedin.com/in/hendra-sadewa/`,
    twitterURL: `https://twitter.com/sadevva_`,
    instagramURL: `https://www.instagram.com/sadevva_/`,
    email: `hendrasadewa30@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
