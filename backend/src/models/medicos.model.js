import {db} from "../config/Dbdatos.js";
//Obtener todos los medicos
export const getMedicos = async () => {
  const [rows] = await db.query("SELECT m.id_medico,m.nombre,m.apellido,m.telefono,m.email,m.especialidad_id,e.nombre_especialidad AS especialidad FROM medico m INNER JOIN especialidades e ON m.especialidad_id = e.id_especialidad");
  return rows;
};

//Obtener un medico por ID
export const getMedicoById = async (id) => {
  const [rows] = await db.query("SELECT m.id_medico,m.nombre,m.apellido,m.telefono,m.email,m.especialidad_id,e.nombre_especialidad AS especialidad FROM medico m INNER JOIN especialidades e ON m.especialidad_id = e.id_especialidad WHERE m.id_medico = ?", [id]);
  return rows[0];
};

//Crear un nuevo medico
export const createMedico = async (medico) => {
  const {nombre,apellido,especialidad,telefono,email} = medico;
  const [result] = await db.query(
    "INSERT INTO medico (nombre,apellido,especialidad_id,telefono,email) VALUES (?, ?, ?, ?, ?)",
    [nombre,apellido,especialidad,telefono,email]
  );
  return result;
};

//Actualizar un medico existente
export const updateMedico = async (id, medico) => {
  const {nombre,apellido,especialidad,telefono,email} = medico;
    const [result] = await db.query(
      "UPDATE medico SET nombre=?, apellido=?, especialidad_id=?, telefono=?, email=? WHERE id_medico=?",
      [nombre,apellido,especialidad,telefono,email,id]
    );
    return result;
  };

//Eliminar un medico
export const deleteMedico = async (id) => {
  const [result] = await db.query("DELETE FROM medico WHERE id_medico = ?", [id]);
  return result;
};