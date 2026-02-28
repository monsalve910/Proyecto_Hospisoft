import * as citasService from "../services/citas.service.js";

export const getCitas = async (req, res) => {
  try {
    const citas = await citasService.listarCitas();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCitaById = async (req, res) => {
  try {
    const cita = await citasService.obtenerCita(req.params.id);
    res.json(cita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCita = async (req, res) => {
  try {
    const result = await citasService.crearCita(req.body);
    res.json({ message: "Cita creada", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCita = async (req, res) => {
  try {
    await citasService.actualizarCita(req.params.id, req.body);
    res.json({ message: "Cita actualizada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCita = async (req, res) => {
  try {
    await citasService.eliminarCita(req.params.id);
    res.json({ message: "Cita eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};