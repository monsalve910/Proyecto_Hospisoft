//! este archivo se encarga de conectar con la base
//! de datos

import mysql from "mysql2";
let cnx;
try {
  cnx = mysql.createConnection({
    host: "localhost",
    user: "root",

    database: "hospisoft",
  });
} catch (error) {
  console.error("Error al conectar a la base de datos:", error);
}
