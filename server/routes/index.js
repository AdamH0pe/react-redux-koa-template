const   meta = require('./meta'),
        defaultRoute = require('./default'),
        compose = require('koa-compose');

module.exports = Config => {
    return compose([    
        meta(Config),
        defaultRoute(Config)
    ])
}