import * as pacienteService from "../services/paciente.service.js";

// Controlador para listar todos los pacientes
export const getPacientes = async (req, res) => {
  try {
    const pacientes = await pacienteService.listarPacientes();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getPacienteById = async (req, res) => {
  try {
    const paciente = await pacienteService.obtenerPaciente(req.params.id);
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createPaciente = async (req, res) => {
  try {
    const id = await pacienteService.crearPaciente(req.body);
    res.json({ message: "Paciente creado", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePaciente = async (req, res) => {
  try {
    await pacienteService.actualizarPaciente(req.params.id, req.body);
    res.json({ message: "Paciente actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    await pacienteService.eliminarPaciente(req.params.id);
    res.json({ message: "Paciente eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};