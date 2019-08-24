const mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fec'
};

const connection = mysql.createConnection(config);

module.exports = connection;