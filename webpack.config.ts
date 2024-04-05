import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  output: {
    filename: "index.cjs",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  resolve: {
    extensions: [".cts", ".mts", ".ts", ".cjs", ".mjs", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.[cm]?ts$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              target: "es2020",
              parser: {
                syntax: "typescript",
                tsx: false,
                dynamicImport: true,
              },
            },
          },
        },
      },
    ],
  },
  target: "node",
};

export default config;
