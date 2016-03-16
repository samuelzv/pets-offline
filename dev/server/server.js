var koa = require('koa');
var serve = require('koa-static');

var app = module.exports = koa();

app.use(serve(__dirname + '/../../build-app'));
app.listen(3000);
console.log('Koa listening on port 3000');



