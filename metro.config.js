const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve(
      "react-native-svg-transformer"
    ),
    inlineRequires: true,
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();

// const defaultConfig = getDefaultConfig(__dirname);
// defaultConfig.resolver.sourceExts.push("cjs");

// module.exports = defaultConfig;

