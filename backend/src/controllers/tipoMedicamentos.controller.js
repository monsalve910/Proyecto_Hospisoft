import * as tipoMedicamentoService from "../services/tipoMedicamento.service.js";

// Controlador para listar todos los tipos de medicamentos
export const getTiposMedicamentos = async (req, res) => {
  try {
    const tipos = await tipoMedicamentoService.listarTiposMedicamentos();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getTipoMedicamentoById = async (req, res) => {
  try {
    const tipo = await tipoMedicamentoService.obtenerTipoMedicamento(req.params.id);
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createTipoMedicamento = async (req, res) => {
  try {
    const id = await tipoMedicamentoService.crearTipoMedicamento(req.body);
    res.json({ message: "Tipo de medicamento creado", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTipoMedicamento = async (req, res) => {
  try {
    await tipoMedicamentoService.actualizarTipoMedicamento(req.params.id, req.body);
    res.json({ message: "Tipo de medicamento actualizado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTipoMedicamento = async (req, res) => {
  try {
    await tipoMedicamentoService.eliminarTipoMedicamento(req.params.id);
    res.json({ message: "Tipo de medicamento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};