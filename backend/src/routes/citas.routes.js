import express from "express";
import * as citasService from "../services/citas.services.js";

const router = express.Router();

// 1. Listar todos
router.get("/listartodos", async (req, res) => {
  try {
    const citas = await citasService.listarCitas();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Listar por ID
router.get("/listarid/:id", async (req, res) => {
  try {
    const cita = await citasService.obtenerCita(req.params.id);
    if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
    res.json(cita);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Crear cita
router.post("/crearcita", async (req, res) => {
  try {
    const nuevaCita = await citasService.crearCita(req.body);
    res.status(201).json(nuevaCita);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Editar cita
router.put("/editarcita/:id", async (req, res) => {
  try {
    const citaActualizada = await citasService.actualizarCita(req.params.id, req.body);
    res.json(citaActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Eliminar cita
router.delete("/eliminarcitas/:id", async (req, res) => {
  try {
    await citasService.eliminarCita(req.params.id);
    res.json({ message: "Cita eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;