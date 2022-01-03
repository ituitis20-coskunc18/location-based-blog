module.exports = {
    port: process.env.PORT || 8080,
    db: {
        database: process.env.DB_NAME || 'mysql',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
            port: process.env.DB_PORT || '3306',
            logging: true
        },
        syncOptions: {
            alter: process.env.DB_ALTER == "true" || false,
            force: process.env.DB_FORCE == "true" || false
        }
    },
    models: {
        user: {
            salt_factor: 12,
            nameL: 60
        },
        trip: {
            titleL: 200,
            locationL: 200
        },
        post: {
            titleL: 200,
            locationL: 200
        }
    }
}