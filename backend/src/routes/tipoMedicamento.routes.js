import { Router } from "express";
import * as tipoMedicamentoController from "../controllers/tipoMedicamentos.controller.js";

const router = Router();

router.get("/", tipoMedicamentoController.getTiposMedicamentos);
router.get("/:id", tipoMedicamentoController.getTipoMedicamentoById);
router.post("/", tipoMedicamentoController.createTipoMedicamento);
router.put("/:id", tipoMedicamentoController.updateTipoMedicamento);
router.delete("/:id", tipoMedicamentoController.deleteTipoMedicamento);

export default router;
