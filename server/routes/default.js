//  THE DEFAULT ROOT PROXY CLIENT

const   proxy = require('koa-proxy'),
        mount = require('koa-mount'),
        static = require('koa-static');

module.exports = Config => {
    if(Config.dev) {
        return mount('/', proxy({ host: Config.devProxyHost }))
    } 
    else {
        return mount('/', static( Config.publicPath ))   
    }
}