module.exports = (app) => {
    // Definir todas las rutas aquí
    app.get('/', (req, res) => {
        res.json({ msg: 'hola mundo' });
    });
};
