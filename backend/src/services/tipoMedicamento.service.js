import * as tipoMedicamentoModel from "../models/tipoMedicamento.model.js";

// Obtener todos los tipos de medicamentos

export const listarTiposMedicamentos = async () => {
  return await tipoMedicamentoModel.getTiposMedicamento();
};

// Obtener un tipo de medicamento por ID
export const obtenerTipoMedicamento = async (id) => {
  return await tipoMedicamentoModel.getTipoMedicamentoById(id);

};

// Crear un nuevo tipo de medicamento
export const crearTipoMedicamento = async (tipoMedicamento) => {
  return await tipoMedicamentoModel.createTipoMedicamento(tipoMedicamento);
};

// Actualizar un tipo de medicamento existente
export const actualizarTipoMedicamento = async (id, tipoMedicamento) => {
  return await tipoMedicamentoModel.updateTipoMedicamento(id, tipoMedicamento);
};

// Eliminar un tipo de medicamento
export const eliminarTipoMedicamento = async (id) => {
  return await tipoMedicamentoModel.deleteTipoMedicamento(id);
};