// routers/users.js
const ServerController = require('../controller/serverController');

module.exports = (app) => {
    // Definir todas las rutas aquí
    app.get('/users', ServerController.index);
};
