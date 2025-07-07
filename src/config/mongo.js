const mongoose = require('mongoose');
const config = require('./database');

const connectMongo = async () => {
    const db = config.connections.mongodb;

    const encode = encodeURIComponent;
    const protocol = db.protocol;
    const username = db.username;
    const password = encode(db.password);
    const host = db.host;
    const dbname = db.database;
    const options = db.options;

    let uri = '';

    if (protocol === 'mongodb+srv') {
        uri = `${protocol}://${username}:${password}@${host}/${dbname}?${options}`;
    } else {
        uri = `${protocol}://${username}:${password}@${host}:${db.port}/${dbname}?${options}`;
    }

    try {
        await mongoose.connect(uri); // sin opciones obsoletas
        console.log('✅ Conectado a MongoDB');
    } catch (error) {
        console.error('❌ Error conectando a MongoDB:', error.message);
    }
};

module.exports = connectMongo;
