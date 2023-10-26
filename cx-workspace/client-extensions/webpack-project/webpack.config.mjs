import { fileURLToPath } from "node:url";

/** @type { import('webpack').Configuration } */
const config = {
  entry: ["./src/index.jsx"],

  experiments: {
    outputModule: true,
  },
  output: {
    path: fileURLToPath(new URL("./webpack-build", import.meta.url)),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: "./webpack-build",
    },
  },

  externals: [/^project-library(\/.*)?$/],
  externalsType: "module",
};

export default config;
