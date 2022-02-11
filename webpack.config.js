const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",

  context: path.resolve(__dirname, "src"),

  entry: {
    main: "./index.ts",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   loader: "babel-loader",
      // },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: "ts-loader",
      },

      //   {
      //     test: /\.(s(a|c)?ss)$/,
      //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      //   },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],

  watch: true,
};
