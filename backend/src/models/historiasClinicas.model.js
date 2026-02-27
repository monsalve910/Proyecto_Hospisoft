import pool from "../config/Dbdatos.js";
//Obtener todos los medicos
export const getHistoriasClinicas = async () => {
  const [rows] = await pool.query("SELECT * FROM historias_clinicas");
  return rows;
};
export const getHistoriaClinicaById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM historias_clinicas WHERE id_historia = ?", [id]);
  return rows[0];
};

//Crear un nuevo medico
export const createHistoriaClinica = async (historiaClinica) => {
  const {paciente_id,fecha,diagnostico,tratamiento,observaciones,medico_id} = historiaClinica;
  const [result] = await pool.query(
    "INSERT INTO historias_clinicas (paciente_id,fecha,diagnostico,tratamiento,observaciones,medico_id) VALUES (?,?,?,?,?,?)",
    [paciente_id,fecha,diagnostico,tratamiento,observaciones,medico_id]
  );
  return result;
};

//Actualizar un medico existente
export const updateHistoriaClinica = async (id, historiaClinica) => {
  const {paciente_id,fecha,diagnostico,tratamiento,observaciones,medico_id} = historiaClinica;
    const [result] = await pool.query(
      "UPDATE historias_clinicas SET paciente_id=?,fecha=?,diagnostico=?,tratamiento=?,observaciones=?,medico_id=? WHERE id_historia=?",
      [paciente_id,fecha,diagnostico,tratamiento,observaciones,medico_id,id]
    );
    return result;
  };

//Eliminar un medico
export const deleteHistoriaClinica = async (id) => {
  const [result] = await pool.query("DELETE FROM historias_clinicas WHERE id_historia = ?", [id]);
  return result;
};