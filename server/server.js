var koa     = require('koa'),
    logger  = require('koa-logger'),
    body    = require('koa-body'),
    routes  = require('./routes'),
    debug   = require('debug');
    
const d = debug('server:index');

module.exports = function server(Config) {
    
    const app = koa();
    
    if(Config.logger) app.use(logger());
    app.use(body({ multipart: true }));
    app.use(routes(Config));
        
    return app;
}