import { Router } from "express";
import * as especialidadController from "../controllers/especialidades.controller.js";

const router = Router();

router.get("/listartodos", especialidadController.getEspecialidades);
router.get("/listarporid/:id", especialidadController.getEspecialidadById);
router.post("/crear", especialidadController.createEspecialidad);
router.put("/editar/:id", especialidadController.updateEspecialidad);
router.delete("/eliminar/:id", especialidadController.deleteEspecialidad);
export default router;