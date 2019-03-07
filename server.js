/* eslint-disable no-console */
require('colors');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const clientConfigDev = require('./webpack/client.dev');
const serverConfigDev = require('./webpack/server.dev');
const clientConfigProd = require('./webpack/client.prod');
const serverConfigProd = require('./webpack/server.prod');
const path = require('path');

const DEV = process.env.NODE_ENV === 'development';
let absPath = null;
let isBuilt = false;

const app = express();

/* eslint-ignore-all */
const done = () =>
  !isBuilt && app.listen(3000, () => {
	  isBuilt = true;
	  console.log('BUILD COMPLETE -- Listening @ http://localhost:3000'.magenta);
  });

if (DEV) {
  absPath = 'http://localhost:1981';
  const compiler = webpack([clientConfigDev, serverConfigDev]);
  const clientCompiler = compiler.compilers[0];
  const options = { hot: true, stats: { colors: true } };

  app.use('/static', (req, res) => {
    res.redirect(absPath + req.originalUrl);
  });
  app.use(webpackDevMiddleware(compiler, options));
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(compiler, { serverRendererOptions: { absPath } }));

  compiler.plugin('done', done);

} else {
  absPath = 'http://localhost:8000';

  webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
    if (err) {
      console.log(err);
    } else {
      const clientStats = stats.toJson().children[0];
      const serverRender = require('./buildServer/main.js').default;

      app.use('/static/', express.static(path.join(clientConfigProd.output.path, 'static')));
      app.use(serverRender({ clientStats, absPath }));
      done();
    }
  });
}