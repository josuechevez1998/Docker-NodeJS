const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    // Cargar cada módulo de rutas y pasarle el sub-router
    require('./users')(router);
    // Puedes agregar más
    // require('./posts')(router);
    // require('./comments')(router);

    // Aplicar el prefijo global (como /api)
    app.use('/api/v1', router);
};
