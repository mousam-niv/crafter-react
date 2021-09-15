const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://13.71.97.36:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/studio",
    createProxyMiddleware({
      target: "http://13.71.97.36:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/static-assets",
    createProxyMiddleware({
      target: "http://13.71.97.36:8080",
      changeOrigin: true,
    })
  );
};
