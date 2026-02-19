//! este archivo se encarga de conectar con la base
//! de datos

import mysql from "mysql2/promise";


//  Pool de conexión a la base de datos Hospisoft
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // si tienes contraseña, agrégala aquí
  database: "hospisoft",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

