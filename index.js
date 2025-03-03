import userRoutes from "./routes/userRoutes.js";
import express from "express";
import db from "./config/db.js";

const app = express();

// Conexión a la BD
try {
  await db.authenticate();
  console.log("Conexión establecida correctamente con MySQL.");
} catch (error) {
  console.error("No se pudo conectar a la base de datos:", error);
}

// Habilitar Pug
app.set("view engine", "pug");
app.set("views", "./views");

// Carpeta Pública
app.use(express.static("dist"));

// Routing
app.use("/auth", userRoutes);

// Definir puerto
app.listen(3000);
