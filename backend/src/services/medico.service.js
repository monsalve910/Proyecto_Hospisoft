import * as medicoModel from "../models/medicos.model.js";

// Obtener todos los medicos
export const listarMedicos = async () => {
  return await medicoModel.getMedicos();
};

// Obtener un medico por ID
export const obtenerMedico = async (id) => {
  return await medicoModel.getMedicoById(id);
};

// Crear un nuevo medico
export const crearMedico = async (medico) => {
  return await medicoModel.createMedico(medico);
};

// Actualizar un medico existente
export const actualizarMedico = async (id, medico) => {
  return await medicoModel.updateMedico(id, medico);
};

// Eliminar un medico
export const eliminarMedico = async (id) => {
  return await medicoModel.deleteMedico(id);
};