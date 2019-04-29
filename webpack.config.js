const path = require("path");

module.exports = {
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
  target: "web",
  mode: "production",
  node: {
    buffer: true,
    crypto: true
  },
  devServer: {
    contentBase: "./dist"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "lastpass.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd"
  }
};
