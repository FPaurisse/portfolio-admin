/* eslint-disable import/no-extraneous-dependencies */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    ['/api', '/uploads'],
    createProxyMiddleware({
      target: 'http://localhost:3001/',
      changeOrigin: true,
    }),
  );
};
