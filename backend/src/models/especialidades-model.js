import {db} from "../config/Dbdatos.js";
//Obtener todos los medicos
export const getEspecialidades = async () => {
  const [rows] = await db.query("SELECT * FROM especialidades");
  return rows;
};
export const getEspecialidadById = async (id) => {
  const [rows] = await db.query("SELECT * FROM especialidades WHERE id_especialidad = ?", [id]);
  return rows[0];
};

//Crear un nuevo medico
export const createEspecialidad = async (especialidad) => {
  const {nombre_especialidad} = especialidad;
  const [result] = await db.query(
    "INSERT INTO especialidades (nombre_especialidad) VALUES (?)",
    [nombre_especialidad]
  );
  return result;
};

//Actualizar un medico existente
export const updateEspecialidad = async (id, especialidad) => {
  const {nombre_especialidad} = especialidad;
    const [result] = await db.query(
      "UPDATE especialidades SET nombre_especialidad=? WHERE id_especialidad=?",
      [nombre_especialidad,id]
    );
    return result;
  };

//Eliminar un medico
export const deleteEspecialidad = async (id) => {
  const [result] = await db.query("DELETE FROM especialidades WHERE id_especialidad = ?", [id]);
  return result;
};