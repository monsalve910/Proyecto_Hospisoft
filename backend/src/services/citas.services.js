import * as citasModel from "../models/citas.models.js";

// Obtener todas las citas
export const listarCitas = async () => {
  return await citasModel.getCitas();
};

// Obtener una cita por ID
export const obtenerCita = async (id) => {
  return await citasModel.getCitaById(id);
};

// Crear una nueva cita
export const crearCita = async (cita) => {
  return await citasModel.createCita(cita);
};

// Actualizar una cita existente
export const actualizarCita = async (id, cita) => {
  return await citasModel.updateCita(id, cita);
};

// Eliminar una cita
export const eliminarCita = async (id) => {
  return await citasModel.deleteCita(id);
};