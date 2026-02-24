import pool from "../config/Dbdatos.js";
//Obtener todos los medicos
export const getMedicos = async () => {
  const [rows] = await pool.query("SELECT * FROM medico");
  return rows;
};

//Obtener un medico por ID
export const getMedicoById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM medico WHERE id_medico = ?", [id]);
  return rows[0];
};

//Crear un nuevo medico
export const createMedico = async (medico) => {
  const {nombre,apellido,especialidad,telefono,email} = medico;
  const [result] = await pool.query(
    "INSERT INTO medico (nombre,apellido,especialidad,telefono,email) VALUES (?, ?, ?, ?, ?)",
    [nombre,apellido,especialidad,telefono,email]
  );
  return result;
};

//Actualizar un medico existente
export const updateMedico = async (id, medico) => {
  const {nombre,apellido,especialidad,telefono,email} = medico;
    const [result] = await pool.query(
      "UPDATE medico SET nombre=?, apellido=?, especialidad=?, telefono=?, email=? WHERE id_medico=?",
      [nombre,apellido,especialidad,telefono,email,id]
    );
    return result;
  };

//Eliminar un medico
export const deleteMedico = async (id) => {
  const [result] = await pool.query("DELETE FROM medico WHERE id_medico = ?", [id]);
  return result;
};