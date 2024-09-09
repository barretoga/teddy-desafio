const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");
const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "barretoga-react",
    projectName: "barretoga-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [new DotenvWebpackPlugin()],
  });
};
