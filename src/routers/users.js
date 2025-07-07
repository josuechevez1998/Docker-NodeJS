// routers/users.js
const UserController = require('../controller/userController');

module.exports = (app) => {
    // Definir todas las rutas aquí
    app.get('/users', UserController.index);
    app.post('/users/store', UserController.store);
};
