import {db} from "../config/Dbdatos.js";
//Obtener todos los tipos de medicamentos
export const getTiposMedicamento = async () => {
  const [rows] = await db.query("SELECT * FROM tipo_medicamentos");
  return rows;
};

//Obtener un tipo de medicamento por ID
export const getTipoMedicamentoById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM tipo_medicamentos WHERE id_tipo = ?",
    [id],
  );
  return rows[0];
};

//Crear un nuevo tipo de medicamento
export const createTipoMedicamento = async (tipoMedicamento) => {
  const { nombre_tipo } = tipoMedicamento;
  const [result] = await db.query(
    "INSERT INTO tipo_medicamentos (nombre_tipo) VALUES (?)",
    [nombre_tipo],
  );
  return result;
};

//Actualizar un tipo de medicamento existente
export const updateTipoMedicamento = async (id, tipoMedicamento) => {
  const { nombre_tipo } = tipoMedicamento;

  const [result] = await db.query(
    "UPDATE tipo_medicamentos SET nombre_tipo=? WHERE id_tipo=?",
    [nombre_tipo, id],
  );
  return result;
};

//Eliminar un tipo de medicamento
export const deleteTipoMedicamento = async (id) => {
  const [result] = await db.query(
    "DELETE FROM tipo_medicamentos WHERE id_tipo = ?",
    [id],
  );
  return result;
};
