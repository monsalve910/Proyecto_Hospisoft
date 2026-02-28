import pool from "../config/Dbdatos.js";

// Obtener todas las citas
export const getCitas = async () => {
  const [rows] = await pool.query("SELECT * FROM citas");
  return rows;
};

// Obtener cita por ID
export const getCitaById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM citas WHERE id_cita = ?",
    [id]
  );
  return rows[0];
};

// Crear cita
export const createCita = async (cita) => {
  const { fecha, hora, estado, paciente_id, medico_id, observaciones } = cita;

  const [result] = await pool.query(
    `INSERT INTO citas (fecha, hora, estado, paciente_id, medico_id, observaciones)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [fecha, hora, estado, paciente_id, medico_id, observaciones]
  );

  return result;
};

// Actualizar cita
export const updateCita = async (id, cita) => {
  const { fecha, hora, estado, paciente_id, medico_id, observaciones } = cita;

  const [result] = await pool.query(
    `UPDATE citas 
     SET fecha=?, hora=?, estado=?, paciente_id=?, medico_id=?, observaciones=?
     WHERE id_cita=?`,
    [fecha, hora, estado, paciente_id, medico_id, observaciones, id]
  );

  return result;
};

// Eliminar cita
export const deleteCita = async (id) => {
  const [result] = await pool.query(
    "DELETE FROM citas WHERE id_cita = ?",
    [id]
  );

  return result;
};