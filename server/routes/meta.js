const koaRouter = require('koa-router');

module.exports = Config => {
    
    const router = koaRouter();
        
    router.get('/meta', function getMeta() {
        
        this.body = {
            env: process.env.NODE_ENV || 'not found',
            uptime: process.uptime(),
            configDev: Config.dev
        } 
    });
    
    return router.middleware();
    
}