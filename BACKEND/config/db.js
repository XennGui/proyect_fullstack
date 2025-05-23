//BACKEND/config/db.js
const { Pool } = require('pg');

class Database {
    constructor() {
        this.Pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'ventasdb',
            password: 'admin',
            port: 5432,
        });
    }

    query(text, params) {
        return this.Pool.query(text, params);
    }
}

module.exports = new Database();
