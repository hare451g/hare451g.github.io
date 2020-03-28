module.exports = {
  pathPrefix: '/hare451g.github.io',
  siteMetadata: {
    title: `// hendra's devblog`,
    description: `Personal blog of Hendra Sadewa`,
    author: `Hendra 'hare' Sadewa`,
    authorShortIntro:
      'FOSS and JavaScript Enthusiast, addicted to ThinkPads and weird music',
    twitter: `@sadevva_`,
    instagram: `sadevva_`,
    linkedIn: `hendra-sadewa`,
    linkedInURL: `https://www.linkedin.com/in/hendra-sadewa/`,
    twitterURL: `https://twitter.com/sadevva_`,
    instagramURL: `https://www.instagram.com/sadevva_/`,
    email: `hendrasadewa30@gmail.com`,
    siteUrl: `https://hendrasadewa.site/`,
  },
  plugins: [
    'gatsby-plugin-cname',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdown-posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hendrasadewa.site`,
        short_name: `hareblog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/hareblog-icon.svg`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
};
