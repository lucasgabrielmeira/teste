const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lucas',
    password: 'mimoprograma19', // substitua com sua senha
    database: 'login_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

module.exports = connection;