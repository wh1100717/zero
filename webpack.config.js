// Generated by CoffeeScript 1.10.0
var _, generateAppConfig, generateConfig, generateServerConfig, loaders, path, webpack;

_ = require('lodash');

path = require('path');

webpack = require('webpack');

loaders = require('./loaders.config');

generateConfig = (function(_this) {
  return function(DEBUG) {
    var VERBOSE, config;
    if (DEBUG == null) {
      DEBUG = true;
    }
    VERBOSE = process.env.VERBOSE != null ? true : false;
    config = {
      output: {
        sourcePrefix: '  '
      },
      cache: DEBUG,
      debug: DEBUG,
      stats: {
        colors: true,
        timings: true,
        reasons: DEBUG,
        hash: VERBOSE,
        chunks: VERBOSE,
        chunkModules: VERBOSE,
        cached: VERBOSE,
        cachedAssets: VERBOSE
      },
      plugins: [new webpack.optimize.OccurenceOrderPlugin()],
      resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
      },
      module: {
        loaders: loaders
      },
      devtool: DEBUG ? 'source-map' : false
    };
    return config;
  };
})(this);

generateAppConfig = (function(_this) {
  return function(DEBUG) {
    var VERBOSE, appConfig, config;
    if (DEBUG == null) {
      DEBUG = true;
    }
    VERBOSE = process.env.VERBOSE != null ? true : false;
    config = generateConfig(DEBUG);
    if (DEBUG) {
      appConfig = _.assign({}, config, {
        entry: ['webpack-dev-server/client?http://localhost:3001', 'webpack/hot/only-dev-server', './src/app/index.js'],
        output: {
          path: path.join(__dirname, './dist/public'),
          publicPath: '/',
          filename: 'app.js'
        },
        plugins: _.union(config.plugins, [new webpack.HotModuleReplacementPlugin()])
      });
    } else {
      appConfig = _.assign({}, config, {
        entry: ['./src/app/index.js'],
        output: {
          path: path.join(__dirname, './dist/public'),
          publicPath: '/',
          filename: 'app.js'
        },
        plugins: _.union(config.plugins, [
          new webpack.optimize.DedupePlugin(), new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: VERBOSE
            }
          }), new webpack.optimize.AggressiveMergingPlugin()
        ])
      });
    }
    return appConfig;
  };
})(this);

generateServerConfig = (function(_this) {
  return function(DEBUG) {
    var GLOBALS, config, serverConfig;
    if (DEBUG == null) {
      DEBUG = true;
    }
    GLOBALS = {
      '__DEV__': DEBUG
    };
    config = generateConfig(DEBUG);
    serverConfig = _.assign({}, config, {
      entry: ['./src/server/index.js'],
      output: {
        path: path.join(__dirname, './dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2'
      },
      target: 'node',
      externals: [
        function(context, request, cb) {
          var isExternal;
          isExternal = request.match(/^[a-z][a-z\/\.\-0-9]*$/i) && !request.match(/^react-routing/) && !context.match(/[\\\/]react-routing/);
          cb(null, Boolean(isExternal));
        }
      ],
      node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
      },
      plugins: _.union(config.plugins, [
        new webpack.DefinePlugin(_.assign({}, GLOBALS, {
          '__SERVER__': true
        })), new webpack.BannerPlugin('require("source-map-support").install()', {
          raw: true,
          entryOnly: false
        })
      ])
    });
    return serverConfig;
  };
})(this);

module.exports = {
  generateAppConfig: generateAppConfig,
  generateServerConfig: generateServerConfig
};
