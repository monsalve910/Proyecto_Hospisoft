//!modulo para conexion a la base de datos
import mysql from "mysql2/promise";
import dotenv from 'dotenv';//importa la libreria dotenv
dotenv.config();//activa las variables del archivo .env
let cnx;
try {
   cnx = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_BASE,
   port:process.env.DB_PORT,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
});
const conexion = await cnx.getConnection();
console.log("Conexion a la base de datos exitosa");
conexion.release(); //cierra la conexion de prueba
}catch (error) {
    console.log(`error en la conexion a la base de datos: ${error.message}`);
}
export const db=cnx;