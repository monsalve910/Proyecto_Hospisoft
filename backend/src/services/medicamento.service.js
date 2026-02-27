import * as medicamentoModel from "../models/medicamento.model.js";

// Obtener todos los medicamentos
export const listarMedicamentos = async () => {
  return await medicamentoModel.getMedicamentos();
};

// Obtener un medicamento por ID
export const obtenerMedicamento = async (id) => {
  return await medicamentoModel.getMedicamentoById(id);
};

// Crear un nuevo medicamento
export const crearMedicamento = async (medicamento) => {
  return await medicamentoModel.createMedicamento(medicamento);
};

// Actualizar un medicamento existente
export const actualizarMedicamento = async (id, medicamento) => {
  return await medicamentoModel.updateMedicamento(id, medicamento);
};

// Eliminar un medicamento
export const eliminarMedicamento = async (id) => {
  return await medicamentoModel.deleteMedicamento(id);
};
