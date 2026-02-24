import * as especialidadesModel from "../models/especialidades-model.js";

// Obtener todos los medicos
export const listarEspecialidades = async () => {
  return await especialidadesModel.getEspecialidades();
};