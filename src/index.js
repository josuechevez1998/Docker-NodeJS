
require('dotenv').config();

const connectMongo = require('./config/mongo');
const Server = require('./config/server');

connectMongo(); 

const server = new Server();
server.listen();
