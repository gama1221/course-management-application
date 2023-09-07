const Webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "development";
module.exports = {
  mode: "development",
  target: "web",
  devtool: "source-map",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  stats: {
    preset: "minimal",
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Application",
      favicon: "src/favicon.ico",
      template: "src/index.html",
    }),
  ],
};
