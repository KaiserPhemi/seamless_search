// third-party libraries
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      { test: /\.scss$/, loader: ["style-loader", "css-loader", "sass-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true
    }),
    new WebpackMd5Hash()
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  }
};
