const path = require("path");
const webpack = require("webpack");
const config = {
  entry: "./src/lastpass.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "production",
  //devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};

const webConfig = {
  ...config,
  target: "web",
  node: {
    buffer: true,
    crypto: true
  },
  output: { ...config.output, filename: "lastpass.client.js" }
};

const serverConfig = {
  ...config,
  target: "node",
  output: { ...config.output, filename: "lastpass.node.js" },
  plugins: [
    new webpack.ProvidePlugin({
      FormData: "form-data",
      fetch: ["node-fetch", "default"]
    })
  ]
};

module.exports = [serverConfig, webConfig];
