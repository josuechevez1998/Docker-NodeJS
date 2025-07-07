require('dotenv').config();

module.exports = {
    default: process.env.DB_CONNECTION || 'mongodb',

    connections: {
        mongodb: {
            driver: 'mongodb',
            protocol: process.env.DB_PROTOCOL || 'mongodb',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 27017,
            database: process.env.DB_DATABASE || 'test',
            username: process.env.DB_USERNAME || '',
            password: process.env.DB_PASSWORD || '',
            options: process.env.DB_OPTIONS || '',
        },

        mysql: {
            driver: 'mysql',
            host: process.env.DB_HOST || '127.0.0.1',
            port: process.env.DB_PORT || 3306,
            database: process.env.DB_DATABASE || 'forge',
            username: process.env.DB_USERNAME || 'forge',
            password: process.env.DB_PASSWORD || '',
            charset: 'utf8mb4',
        },
    }
};
