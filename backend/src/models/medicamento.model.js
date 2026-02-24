import pool from "../config/Dbdatos.js";
//Obtener todos los medicamentos
export const getMedicamentos = async () => {
  const [rows] = await pool.query("SELECT * FROM medicamento");
  return rows;
};

//Obtener un medicamento por ID
export const getMedicamentoById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM medicamento WHERE id_medicamento = ?",
    [id],
  );
  return rows[0];
};

//Crear un nuevo medicamento
export const createMedicamento = async (medicamento) => {
  const {
    nombre,
    descripcion,
    stock,
    precio,
  } = medicamento;
  const [result] = await pool.query(
    "INSERT INTO medicamento (nombre,descripcion,stock,precio) VALUES (?, ?, ?, ?)",
    [nombre, descripcion, stock, precio],
  );
  return result;
};

//Actualizar un medicamento existente
export const updateMedicamento = async (id, medicamento) => {
  const {
    nombre,
    descripcion,
    stock,
    precio,
  } = medicamento;
  const [result] = await pool.query(
    "UPDATE medicamento SET nombre=?, descripcion=?, stock=?, precio=? WHERE id_medicamento=?",
    [
      nombre,
      descripcion,
      stock,
      precio,
      id,
    ],
  );
  return result;
};

//Eliminar un medicamento
export const deleteMedicamento = async (id) => {
  const [result] = await pool.query(
    "DELETE FROM medicamento WHERE id_medicamento = ?",
    [id],
  );
  return result;
};
