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
        // To fix https://github.com/vitessce/vitessce/issues/1640
        rules: [
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false
            }
          },
        ],
        // To fix https://github.com/vitessce/vitessce/issues/1674
        // In webpack v4
        // strictExportPresence: false,
        // In webpack v5
        parser: {
          javascript: {
            exportsPresence: false,
          },
        },
      },
    },
  },
}
