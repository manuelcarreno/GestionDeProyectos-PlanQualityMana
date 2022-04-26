const mysql = require ('mysql');
const {promisify} = require('util');
const {database} = require('./keys');
const Connection = require('mysql/lib/Connection');
const ConnectionConfig = require('mysql/lib/ConnectionConfig');
const Pool = require('mysql/lib/Pool');


const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code == 'PROTOCOL_COLECCION_LOST') {
            console.error('Se cerro la coneccion con la Base de Datos.')
        }
        if (err.code == 'ER_CON_COUNT_ERROR') {
            console.error('Demasiadas conecciones a la Base de Datos')
        }
        if (err.code == 'ECONNREFUSED') {
            console.error('La coneccion con la Base de Datos fue Rechasada')
        }
    } 
    if(connection) connection.release();
    console.log('Base de Datos Conectada');
    return;
});
pool.query = promisify(pool.query);

module.exports = pool;