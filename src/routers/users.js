const express = require('express');
const UserController = require('../controller/userController');

module.exports = (router) => {
    // Definir todas las rutas aquí
    router.get('/users', UserController.index);
    router.post('/users/store', UserController.store);
};
