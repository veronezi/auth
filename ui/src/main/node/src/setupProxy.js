const proxy = require('http-proxy-middleware');
const {execSync} = require('child_process');
const apiProxy = process.env.PROXY_API;
const execCommand = "kubectl get services/auth-ui -o jsonpath='{.spec.clusterIP}'";
const serviceIp = execSync(execCommand);
console.log(`services/auth-ui IP => ${serviceIp} \n`);
if (!apiProxy && !serviceIp) {
    console.log(`missing the proxy IP. Use "PROXY_API=[IP of your api server] npm start"... `);
    console.log(`or make sure the "${execCommand}" returns an IP. \n`);
    throw "missing env var";
}
module.exports = function (app) {
    app.use(proxy('/api', {target: `http://${apiProxy ? apiProxy : serviceIp}/`}));
};
