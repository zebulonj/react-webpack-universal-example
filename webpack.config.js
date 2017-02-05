var path = require( 'path' );
var webpack = require( 'webpack' );

var plugins = [];

module.exports = [
  {
      entry: "./src/client/index.js",
      output: {
          path: path.resolve( __dirname, "public/js" ),
          filename: "bundle.js"
      },
      module: {
          rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
          }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }]
      },
      plugins: plugins
  },
  {
      entry: "./src/app/index.js",
      output: {
          path: path.resolve( __dirname, "build" ),
          filename: "app.js"
      },
      module: {
          rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
          }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }]
      },
      plugins: plugins
  }
];
