
const sql = require('mssql');

const config = {
    user: 'djadmin',
    password:'12345',
    server: 'SAMUEL-TC',
    database: 'django_db',
    options: {
        trustedconection: false,
        enableArithAbort: true,
        encrypt: false,
    }
};

exports.config = config;
exports.sql = sql;
