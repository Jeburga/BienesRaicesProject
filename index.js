import express from "express";
import userRoutes from "./routes/userRoutes.js";
import db from "./config/db.js";

const app = express();

// Habilitar lectura de datos de formulario
app.use( express.urlencoded({extended: true}) )

// Conexión a la BD
try {
  await db.authenticate();
  db.sync();
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
  
});
