var path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./dist/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist/bundle"),
    library: "azext-changelog",
    libraryTarget: "umd",
    filename: "index.js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./icon.png", to: "icon.png" },
        { from: "./task.json", to: "task.json" },
      ],
    }),
  ],
};
