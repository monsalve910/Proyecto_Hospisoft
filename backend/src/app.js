import express from "express";
import cors from "cors";
import pacienteRoutes from "./routes/paciente.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pacientes", pacienteRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
