import { Router } from "express";
import * as medicamentoController from "../controllers/medicamento.controller.js";

const router = Router();

router.get("/", medicamentoController.getMedicamentos);
router.get("/:id", medicamentoController.getMedicamentoById);
router.post("/", medicamentoController.createMedicamento);
router.put("/:id", medicamentoController.updateMedicamento);
router.delete("/:id", medicamentoController.deleteMedicamento);

export default router;
