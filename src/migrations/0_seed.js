const dbConfig = require('../config/db.js');
const sqlite   = require('sqlite-async')

sqlite
    .open(dbConfig.dbname)
    .then(async db => {
        await db.run(`
            INSERT INTO tables 
            VALUES 
                (1,  2),
                (2,  2),
                (3,  4),
                (4,  4),
                (5,  3),
                (6,  3),
                (7,  3),
                (8,  3),
                (9,  3),
                (10, 3),
                (11, 5),
                (12, 5),
                (13, 5),
                (14, 5),
                (15, 5)
        `)
        await db.run(`
            INSERT INTO reserves 
                (table_number, date, client_name)
            VALUES
                (1,  date('now'), 'Jane Invanova'),
                (10, date('now'), 'Gleb Vasylenko');
        `)
    })
    .catch(console.log)