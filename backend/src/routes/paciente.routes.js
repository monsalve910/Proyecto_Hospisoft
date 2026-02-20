import { Router } from "express";
import * as pacienteController from "../controllers/paciente.controller.js";

const router = Router();

router.get("/", pacienteController.getPacientes);
router.get("/:id",pacienteController.getPacienteById);
router.post("/", pacienteController.createPaciente);
router.put("/:id", pacienteController.updatePaciente);
router.delete("/:id", pacienteController.deletePaciente);

export default router;