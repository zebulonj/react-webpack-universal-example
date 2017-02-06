var path = require( 'path' );
var webpack = require( 'webpack' );

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CSS = new ExtractTextPlugin( "css/styles.css" );

var plugins = [];

module.exports = [
  {
      entry: "./src/client/index.js",
      output: {
          path: path.resolve( __dirname, "public" ),
          filename: "js/bundle.js"
      },
      module: {
          rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
          }, {
            test: /\.css$/,
            use: CSS.extract({
              fallback: "style-loader",
              use: {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              }
            })
          }]
      },
      plugins: [
        CSS
      ]
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
