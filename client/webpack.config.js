/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack');

const devBuild = process.env.NODE_ENV !== 'production';

const config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './app/bundles/HelloWorld/startup/registration',
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: '../app/assets/webpack',
  },

  resolve: {
    // https://webpack.js.org/guides/migrating/#resolve-extensions
    extensions: ['.js', '.jsx'],

    // Remove alias as this was needed when we had nested node_modules sub-dependencies
    // alias: {
    //   react: path.resolve('./node_modules/react'),
    //   'react-dom': path.resolve('./node_modules/react-dom'),
    // },
  },
  plugins: [
    // https://webpack.js.org/plugins/environment-plugin
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  ],
  module: {
    // https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham',
          }
        },
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  // https://webpack.js.org/configuration/devtool/#devtool
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
