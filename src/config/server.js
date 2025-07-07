const express = require('express');

class Server {

    constructor() {

        this.app = express();

        this.app.use(express.json()); 

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
