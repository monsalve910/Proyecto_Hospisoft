import { Router } from "express";
import * as tipoMedicamentoController from "../controllers/tipoMedicamentos.controller.js";

const router = Router();

router.get("/listartodos", tipoMedicamentoController.getTiposMedicamentos);
router.get(
  "/listarporid/:id",
  tipoMedicamentoController.getTipoMedicamentoById,
);
router.post("/crear", tipoMedicamentoController.createTipoMedicamento);
router.put("/editar/:id", tipoMedicamentoController.updateTipoMedicamento);
router.delete("/eliminar/:id", tipoMedicamentoController.deleteTipoMedicamento);

export default router;
