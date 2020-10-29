const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  ///
  /// `entry` can also be object to support mulitple endpoints,
  /// CODE SPLITTING: loaded only on the pages that need it
  ///
  // entry: {
  //   foo: "foo.js",
  //   bar: "bar.js",
  // },
  entry: "./src/index.js",
  output: {
    filename: "awesome.js", // default is main.js
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { 
        test: /\.scss$/, // regular expression that matches all the files ending in .scss
        use: [
          /// install sass first
          'style-loader',
          'css-loader',
          'sass-loader',
        ], /// for the above file of regexp `/\.scss$/`, use the loaders included here to process the scss into regular css and then, to js and eventually injected to HTML page
      },
    ],
  },

  plugins: [
    new BundleAnalyzerPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist', /// add here
    port: 9000
  }
};
