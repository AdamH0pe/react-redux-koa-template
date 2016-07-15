if(!process.env.NODE_ENV) process.env.NODE_ENV = 'development'; 
const Config = require('./config/' + process.env.NODE_ENV);

const server = require('./server');

const app = server(Config);

app.listen(Config.port);