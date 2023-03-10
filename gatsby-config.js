/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Protocol Berg - Berlin",
    siteUrl: `https://protocol.berlin`,
    url: `https://protocol.berlin`,
    description:
      "Protocol Berg is a one-day protocol and research focused technical conference taking place in Kreuzber, Berlin, on September 15, 2023",
    twitterUsername: "@ETHBerlin",
    image: `/protocolBerg.png`,
    twitterImage: `/protocolBerg-twitter.png`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
