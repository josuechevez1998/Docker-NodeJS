const express = require('express');
const app = express();

const port = process.env.APP_PORT || 3000;
const host = process.env.APP_HOST || 'localhost';

// Servir contenido estatico
app.use(express.static('view'));
app.use(express.static('public'));

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.sendFile(__dirname + '/views/http-erros/404.html');
});


app.listen(port, e => {
  console.log(`Corriendo en http://${host}:${port}`);
});