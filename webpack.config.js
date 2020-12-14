const BabelEsmPlugin = require('babel-esm-plugin');
const OptimizePlugin = require('optimize-plugin');

module.exports = {
  target: ['web', 'es2017'],
  output: {
    module: true,
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  },
  plugins: [new OptimizePlugin(), new BabelEsmPlugin()],
};
