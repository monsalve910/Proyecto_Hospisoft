import { Router } from "express";
import * as especialidadController from "../controllers/especialidades.controller.js";

const router = Router();

router.get("/", especialidadController.getEspecialidades);
export default router;