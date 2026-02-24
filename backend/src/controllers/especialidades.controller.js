import * as especialidadesService from "../services/especialidades.service.js";

// Controlador para listar todos los especialidades
export const getEspecialidades = async (req, res) => {
  try {
    const especialidades = await especialidadesService.listarEspecialidades();
    res.json(especialidades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};