module.exports = {
  siteMetadata: {
    title: `Willow Creek Documentation`,
    name: `Red Olive`,
    siteUrl: `https://willow-creek-documentation.netlify.com`,
    description: `Willow Creek Documentation`,
    social: [
      {
        name: `github`,
        url: `https://github.com/redolivedev/willow-creek-documentation`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/redolivedesign`,
      },
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true,
    },
  },
  plugins: [
    {
      resolve: `gatsby-theme-document`,
    },
    { resolve: `gatsby-plugin-netlify` },
    { resolve: `gatsby-plugin-netlify-cms-paths` },
    { resolve: `gatsby-plugin-netlify-cms` },
  ],
};
