import nodeExternals from "webpack-node-externals";

export const customWebpackConfig = {
  externals: [nodeExternals()],
  node: {
    crypto: true,
    stream: true,
  },
};
