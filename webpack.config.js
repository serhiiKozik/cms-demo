const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const DotEnv = require("dotenv-webpack")

module.exports = (env, argv) => ({
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
    publicPath: "/",
  },
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  target: "web",
  devtool: argv.mode === "development" ? "#sourcemap" : "false",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "eslint-loader",
            options: {
              emitError: false,
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|css)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name:
                argv.mode === "development"
                  ? "[path][name].[ext]"
                  : "static/[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.yml$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name:
                  argv.mode === "development"
                      ? "[name].[ext]"
                      : "static/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.woff(2)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
            mimetype: "application/font-woff",
            name: "./fonts/[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/static/favicon.ico",
    }),
    new DotEnv(),
  ],
})
