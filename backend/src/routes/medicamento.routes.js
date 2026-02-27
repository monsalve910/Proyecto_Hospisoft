import { Router } from "express";
import * as medicamentoController from "../controllers/medicamento.controller.js";

const router = Router();

router.get("/listartodos", medicamentoController.getMedicamentos);
router.get("/listarporid/:id", medicamentoController.getMedicamentoById);
router.post("/crear", medicamentoController.createMedicamento);
router.put("/editar/:id", medicamentoController.updateMedicamento);
router.delete("/eliminar/:id", medicamentoController.deleteMedicamento);

export default router;
