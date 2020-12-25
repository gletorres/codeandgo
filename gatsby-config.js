module.exports = {
  siteMetadata: {
    title: "CodeAndGo",
    description:
      "Basic syntaxs and courses for beginners and advance web development",
    url: "https://codeandgo.info",
    image: "/codeandgo-logo.png",
    twitterUserName: "@_glenntorres",
    author: "Glenn Torres",
  },
  plugins: [
    {
      //gatsby source filesystem installed
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `syntaxs`,
        path: `${__dirname}/src/syntaxs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //added gatsby-transformer-sharp gatsby-plugin-sharp
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    //added gatxby plugin mdx and gatsby remark images
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    //added google fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `'Source Code Pro'`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
