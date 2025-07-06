const express = require('express');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde Docker con Node.js y Express GuanacoDev!');
});

app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});