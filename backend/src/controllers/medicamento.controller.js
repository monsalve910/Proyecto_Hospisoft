import * as pacienteService from "../services/medicamento.service.js";

// Controlador para listar todos los medicamentos
export const getMedicamentos = async (req, res) => {
  try {
    const medicamentos = await pacienteService.listarMedicamentos();
    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMedicamentoById = async (req, res) => {
  try {
    const medicamento = await pacienteService.obtenerMedicamento(req.params.id);
    res.json(medicamento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMedicamento = async (req, res) => {
  try {
    const id = await pacienteService.crearMedicamento(req.body);
    res.json({ message: "Medicamento creado", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMedicamento = async (req, res) => {
  try {
    await pacienteService.actualizarMedicamento(req.params.id, req.body);
    res.json({ message: "Medicamento actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMedicamento = async (req, res) => {
  try {
    await pacienteService.eliminarMedicamento(req.params.id);
    res.json({ message: "Medicamento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
