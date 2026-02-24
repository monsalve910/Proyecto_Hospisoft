import { Router } from "express";
import * as especialidadController from "../controllers/especialidades.controller.js";

const router = Router();

router.get("/", especialidadController.getEspecialidades);
router.get("/:id", especialidadController.getEspecialidadById);
router.post("/", especialidadController.createEspecialidad);
router.put("/:id", especialidadController.updateEspecialidad);
router.delete("/:id", especialidadController.deleteEspecialidad);
export default router;