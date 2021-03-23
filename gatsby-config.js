require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Roger's Best Burgers",
    siteUrl: "https://happy-panini-9fda44.netlify.app/",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
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
