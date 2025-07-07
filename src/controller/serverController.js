const express = require('express');

class ServerController {

    constructor() {

        this.app = express();
    }

    index(req, res) {

        res.json({
            msg: 'Ruta de usuarios',
        });
    }

}

module.exports = new ServerController();