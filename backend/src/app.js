import express from "express";
import cors from "cors";
import pacienteRoutes from "./routes/paciente.routes.js";
<<<<<<< HEAD
import medicamentoRoutes from "./routes/medicamento.routes.js";
=======
import medicoRoutes from "./routes/medico.routes.js";
import especialidadRoutes from "./routes/especialidades.routes.js";

>>>>>>> crud_medicos
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pacientes", pacienteRoutes);
<<<<<<< HEAD
app.use("/api/medicamentos", medicamentoRoutes);
=======
app.use("/api/medicos", medicoRoutes);
app.use("/api/especialidades", especialidadRoutes);

>>>>>>> crud_medicos
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
