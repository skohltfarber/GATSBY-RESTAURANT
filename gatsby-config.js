module.exports = {
  siteMetadata: {
    title: "Roger's Best Burgers",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "ay-XIxs0Urtbl3dl3-KYPRUKAA_4bh94gzW6iIDtt3Y",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123456",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
