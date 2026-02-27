import express from "express";
import cors from "cors";
import pacienteRoutes from "./src/routes/paciente.routes.js";
import medicamentoRoutes from "./src/routes/medicamento.routes.js";
import medicoRoutes from "./src/routes/medico.routes.js";
import especialidadRoutes from "./src/routes/especialidades.routes.js";
import tipoMedicamentoRoutes from "./src/routes/tipoMedicamento.routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pacientes", pacienteRoutes);
app.use("/api/medicamentos", medicamentoRoutes);
app.use("/api/medicos", medicoRoutes);
app.use("/api/especialidades", especialidadRoutes);
app.use("/api/tiposmedicamentos", tipoMedicamentoRoutes);
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
