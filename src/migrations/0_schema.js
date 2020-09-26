const dbConfig = require('../config/db.js');
const sqlite   = require('sqlite-async')

sqlite
    .open(dbConfig.dbname)
    .then(async db => {
        await db.run(`
            CREATE TABLE tables (
                table_number INTEGER PRIMARY KEY,
                capacity     INTEGER
            )
        `)
        await db.run(`
            CREATE TABLE reserves (
                id           INTEGER PRIMARY KEY AUTOINCREMENT,
                table_number INTEGER,
                date         TEXT,
                client_name  TEXT,
                FOREIGN KEY (table_number) REFERENCES tables(table_number)
            )
        `)
    })
    .catch(console.log)