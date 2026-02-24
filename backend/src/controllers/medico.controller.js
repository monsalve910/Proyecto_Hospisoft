import * as medicoService from "../services/medico.service.js";

// Controlador para listar todos los medicos
export const getMedicos = async (req, res) => {
  try {
    const medicos = await medicoService.listarMedicos();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMedicoById = async (req, res) => {
  try {
    const medico = await medicoService.obtenerMedico(req.params.id);
    res.json(medico);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createMedico = async (req, res) => {
  try {
    const id = await medicoService.crearMedico(req.body);
    res.json({ message: "Medico creado", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMedico = async (req, res) => {
  try {
    await medicoService.actualizarMedico(req.params.id, req.body);
    res.json({ message: "Medico actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMedico = async (req, res) => {
  try {
    await medicoService.eliminarMedico(req.params.id);
    res.json({ message: "Medico eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};