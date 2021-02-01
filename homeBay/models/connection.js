const mysql = require("mysql");
const util = require("util");

var pool = mysql.createPool({
  connectionLimit: 30,
  host: 'remotemysql.com',
  user: 'md4Quhwi0n',
  password: 'X1noFCgRnd',
  database: 'md4Quhwi0n',
  port: '3306'
})

// error in connection is detected when the server starts
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }
  if (connection) connection.release()
  return
})

pool.query = util.promisify(pool.query);

module.exports = pool