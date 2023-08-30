const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
            changeOrigin: true,
        })
    );
};
