import { Router } from "express";
import * as medicoController from "../controllers/medico.controller.js";

const router = Router();

router.get("/", medicoController.getMedicos);
router.get("/:id",medicoController.getMedicoById);
router.post("/", medicoController.createMedico);
router.put("/:id", medicoController.updateMedico);
router.delete("/:id", medicoController.deleteMedico);

export default router;