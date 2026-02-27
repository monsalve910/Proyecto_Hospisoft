import {db} from "../config/Dbdatos.js";
//Obtener todos los medicamentos
export const getMedicamentos = async () => {
  const [rows] = await db.query(`
    SELECT 
      medicamento.id_medicamento AS id_medicamento, 
      medicamento.nombre AS nombre, 
      medicamento.descripcion AS descripcion,
      tipo_medicamentos.nombre_tipo AS tipo,
      medicamento.stock AS stock, 
      medicamento.precio AS precio
    FROM medicamento 
    JOIN tipo_medicamentos 
      ON medicamento.tipo_id = tipo_medicamentos.id_tipo`);
  return rows;
};

//Obtener un medicamento por ID
export const getMedicamentoById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM medicamento WHERE id_medicamento = ?",
    [id],
  );
  return rows[0];
};

//Crear un nuevo medicamento
export const createMedicamento = async (medicamento) => {
  const { nombre, descripcion, stock, precio, tipo_id } = medicamento;
  const [result] = await db.query(
    "INSERT INTO medicamento (nombre,descripcion,stock,precio,tipo_id) VALUES (?, ?, ?, ?, ?)",
    [nombre, descripcion, stock, precio, tipo_id],
  );
  return result;
};

//Actualizar un medicamento existente
export const updateMedicamento = async (id, medicamento) => {
  const { nombre, descripcion, stock, precio, tipo_id } = medicamento;
  const [result] = await db.query(
    "UPDATE medicamento SET nombre=?, descripcion=?, stock=?, precio=?, tipo_id=? WHERE id_medicamento=?",
    [nombre, descripcion, stock, precio, tipo_id, id],
  );
  return result;
};

//Eliminar un medicamento
export const deleteMedicamento = async (id) => {
  const [result] = await db.query(
    "DELETE FROM medicamento WHERE id_medicamento = ?",
    [id],
  );
  return result;
};
