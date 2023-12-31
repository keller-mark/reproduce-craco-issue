const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
 
const isProductionBuild = process.env.NODE_ENV === "production"
const shouldAnalyze = process.env.REACT_APP_RUN_ANALYZER === "true"
const plugins = []
if (isProductionBuild && shouldAnalyze ) {
  plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server' }))
}
module.exports = {
  webpack: {
    plugins,
    configure: {
      module: {
        rules: [
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false
            }
          },
        ],
      },
    },
  },
}
