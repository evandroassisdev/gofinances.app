module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['inline-dotenv'],
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@src': './src',
          },
        },
      ],
    ],
  };
};
