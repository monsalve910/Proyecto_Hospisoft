import pool from "../config/Dbdatos.js";
//Obtener todos los medicos
export const getEspecialidades = async () => {
  const [rows] = await pool.query("SELECT * FROM especialidades");
  return rows;
};