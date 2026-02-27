import { Router } from "express";
import * as pacienteController from "../controllers/paciente.controller.js";

const router = Router();

router.get("/listartodos", pacienteController.getPacientes);
router.get("/listarporid/:id",pacienteController.getPacienteById);
router.post("/crear", pacienteController.createPaciente);
router.put("/editar/:id", pacienteController.updatePaciente);
router.delete("/eliminar/:id", pacienteController.deletePaciente);

export default router;