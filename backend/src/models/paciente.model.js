import pool from "../config/Dbdatos.js";
//Obtener todos los pacientes
export const getPacientes = async () => {
  const [rows] = await pool.query("SELECT * FROM paciente");
  return rows;
};

//Obtener un paciente por ID
export const getPacienteById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM paciente WHERE id_paciente = ?", [id]);
  return rows[0];
};

//Crear un nuevo paciente
export const createPaciente = async (paciente) => {
  const {documento,nombre,apellido,telefono,email,direccion,fechaNacimiento} = paciente;
  const [result] = await pool.query(
    "INSERT INTO paciente (id_paciente,nombre,apellido,telefono,email,direccion,fechaNacimiento) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [documento,nombre,apellido,telefono,email,direccion,fechaNacimiento]
  );
  return result;
};

//Actualizar un paciente existente
export const updatePaciente = async (id, paciente) => {
  const {nombre,apellido,telefono,email,direccion,fechaNacimiento} = paciente;
    const [result] = await pool.query(
      "UPDATE paciente SET nombre=?, apellido=?,telefono=?, email=?, direccion=?, fechaNacimiento=? WHERE id_paciente=?",
      [nombre,apellido,telefono,email,direccion,fechaNacimiento,id]
    );
    return result;
  };

//Eliminar un paciente
export const deletePaciente = async (id) => {
  const [result] = await pool.query("DELETE FROM paciente WHERE id_paciente = ?", [id]);
  return result;
};