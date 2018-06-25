
const path = require('path');
const Koa = require('koa');
const compress = require('koa-compress')
const app = new Koa();
const staticServer = require('koa-static');


app.use(compress());
app.use(staticServer(path.join(__dirname,'public')));

app.listen(8080)