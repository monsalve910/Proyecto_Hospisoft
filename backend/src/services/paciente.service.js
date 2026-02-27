import * as pacienteModel from "../models/paciente.model.js";

// Obtener todos los pacientes
export const listarPacientes = async () => {
  return await pacienteModel.getPacientes();
};

// Obtener un paciente por ID
export const obtenerPaciente = async (id) => {
  return await pacienteModel.getPacienteById(id);
};

// Crear un nuevo paciente
export const crearPaciente = async (paciente) => {
  return await pacienteModel.createPaciente(paciente);
};

// Actualizar un paciente existente
export const actualizarPaciente = async (id, paciente) => {
  return await pacienteModel.updatePaciente(id, paciente);
};

// Eliminar un paciente
export const eliminarPaciente = async (id) => {
  return await pacienteModel.deletePaciente(id);
};