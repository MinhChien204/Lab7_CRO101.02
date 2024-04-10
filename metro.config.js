const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return {
    resolver: {
      ...defaultConfig.resolver,
      sourceExts: [...defaultConfig.resolver.sourceExts, 'jsx', 'js', 'tsx', 'ts'] // Thêm các phần mở rộng tệp tin cho TypeScript (nếu sử dụng TypeScript)
    },
    transformer: {
      ...defaultConfig.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'), // Thêm transformer cho SVG (nếu cần)
    },
  };
})();