const express = require('express');
const dotenv = require('dotenv');

class Server {
    constructor() {
        dotenv.config();
        this.app = express();
        this.port = process.env.APP_PORT || 3000;

        this.routes(); // cargar rutas
    }

    routes() {
        // Requiere y ejecuta el archivo de rutas, pasándole `this.app`
        require('../routers/index')(this.app);
        require('../routers/users')(this.app);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`🚀 Servidor escuchando en http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;
