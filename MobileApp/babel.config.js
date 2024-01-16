module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          hooks: './src/hooks',
          types: './src/types',
          appConstants: './src/constants',
          src: './src',
          assets: './src/assets',
          utils: './src/utils',
          theme: './src/theme',
        },
      },
    ],
  ],
};
