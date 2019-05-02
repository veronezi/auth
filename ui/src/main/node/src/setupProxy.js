const proxy = require('http-proxy-middleware');

const apiProxy = process.env.PROXY_API;
if(!apiProxy) {
  console.log("missing PROXY_API. Use 'PROXY_API=<IP of your api server> npm start'\n");
  throw "missing env var";
}
module.exports = function(app) {
  app.use(proxy('/api', { target: `http://${apiProxy}/` }));
};