const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = mergeConfig(defaultConfig, {
  // You can add custom config overrides here if needed
});

module.exports = wrapWithReanimatedMetroConfig(config);
