_ = require 'lodash'
path = require 'path'
webpack = require 'webpack'
loaders = require './loaders.config'

generateConfig = (DEBUG = true) =>
  VERBOSE = if process.env.VERBOSE? then true else false
  config = {
    output:
      sourcePrefix: '  '
    cache: DEBUG
    debug: DEBUG
    stats:
      colors: true
      timings: true
      reasons: DEBUG
      hash: VERBOSE
      chunks: VERBOSE
      chunkModules: VERBOSE
      cached: VERBOSE
      cachedAssets: VERBOSE
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin()
    ]
    resolve:
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    module:
      loaders: loaders
    devtool: if DEBUG  then 'source-map' else false
  }
  return config

generateAppConfig = (DEBUG = true) =>
  VERBOSE = if process.env.VERBOSE? then true else false
  config = generateConfig(DEBUG)
  if DEBUG
    appConfig = _.assign {}, config, {
      entry: [
        # 在页面中自动增加http://localhost:3001/webpack-dev-server.js，可以检测目前webpack的运行情况
        'webpack-dev-server/client?http://localhost:3001'
        # 其做用是当源码发生修改以后可以live reloads
        'webpack/hot/only-dev-server'
        './src/app/index.js'
      ]
      output: {
        path: path.join __dirname, './dist/public'
        publicPath: '/'
        filename: 'app.js'
      }
      plugins: _.union config.plugins, [new webpack.HotModuleReplacementPlugin()]
    }
  else
    appConfig = _.assign {}, config, {
      entry: ['./src/app/index.js']
      output: {
        path: path.join __dirname, './dist/public'
        publicPath: '/'
        filename: 'app.js'
      }
      plugins: _.union config.plugins, [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: VERBOSE}}),
        new webpack.optimize.AggressiveMergingPlugin()      
      ]
    }
  return appConfig

generateServerConfig = (DEBUG = true) =>
  GLOBALS = {
    '__DEV__': DEBUG
  }

  config = generateConfig(DEBUG)
  serverConfig = _.assign {}, config, {
    entry: [
      './src/server/index.js'
    ]
    output: {
      path: path.join __dirname, './dist'
      filename: 'server.js'
      libraryTarget: 'commonjs2'
    }
    target: 'node'
    externals: [
      (context, request, cb) =>
        isExternal = request.match(/^[a-z][a-z\/\.\-0-9]*$/i) and
          !request.match(/^react-routing/) and
          !context.match(/[\\/]react-routing/)
        cb(null, Boolean(isExternal))
        return
    ]
    node: {
      console: false
      global: false
      process: false
      Buffer: false
      __filename: false
      __dirname: false
    }
    plugins: _.union config.plugins, [
      new webpack.DefinePlugin(_.assign({}, GLOBALS, {'__SERVER__': true})),
      new webpack.BannerPlugin('require("source-map-support").install()',
        { raw: true, entryOnly: false })
    ]
  }
  return serverConfig

module.exports = {
  generateAppConfig: generateAppConfig
  generateServerConfig: generateServerConfig
}
