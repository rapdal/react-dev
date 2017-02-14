const server = require('./app');
const port = (process.env.PORT || 8080);

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.dev.config.js');
  const compiler = webpack(config);

  server.use(webpackDevMiddleware(compiler, {
    // noInfo: true,
    publicPath: config.output.publicPath
  }));
  server.use(webpackHotMiddleware(compiler));  
}

server.listen(port);
console.log(`Listening at http://localhost:${port}`);