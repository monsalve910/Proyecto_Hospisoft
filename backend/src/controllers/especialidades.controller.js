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
export const getEspecialidadById = async (req, res) => {
  try {
    const especialidad = await especialidadesService.obtenerEspecialidad(req.params.id);
    res.json(especialidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createEspecialidad = async (req, res) => {
  try {
    const id = await especialidadesService.crearEspecialidad(req.body);
    res.json({ message: "Especialidad creada", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEspecialidad = async (req, res) => {
  try {
    await especialidadesService.actualizarEspecialidad(req.params.id, req.body);
    res.json({ message: "Especialidad actualizada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEspecialidad = async (req, res) => {
  try {
    await especialidadesService.eliminarEspecialidad(req.params.id);
    res.json({ message: "Especialidad eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};