import * as especialidadesModel from "../models/especialidades-model.js";

// Obtener todos los medicos
export const listarEspecialidades = async () => {
  return await especialidadesModel.getEspecialidades();
};
// Obtener un especialidad por ID
export const obtenerEspecialidad = async (id) => {
  return await especialidadesModel.getEspecialidadById(id);
};

// Crear un nueva especialidad
export const crearEspecialidad = async (especialidad) => {
  return await especialidadesModel.createEspecialidad(especialidad);
};

// Actualizar un especialidad existente
export const actualizarEspecialidad = async (id, especialidad) => {
  return await especialidadesModel.updateEspecialidad(id, especialidad);
};

// Eliminar un especialidad
export const eliminarEspecialidad = async (id) => {
  return await especialidadesModel.deleteEspecialidad(id);
};