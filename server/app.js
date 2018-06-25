
const path = require('path');
const Koa = require('koa');
// const compression = require('compression')
const app = new Koa();
const staticServer = require('koa-static');


// app.use(compression());
app.use(staticServer(path.join(__dirname,'public')));

app.listen(8080)