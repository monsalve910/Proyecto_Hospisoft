import { Router } from "express";
import * as medicoController from "../controllers/medico.controller.js";

const router = Router();

router.get("/listartodos", medicoController.getMedicos);
router.get("/listarporid/:id",medicoController.getMedicoById);
router.post("/crear", medicoController.createMedico);
router.put("/editar/:id", medicoController.updateMedico);
router.delete("/eliminar/:id", medicoController.deleteMedico);

export default router;