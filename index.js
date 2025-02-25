import userRoutes from './routes/userRoutes.js';
import express from 'express';

const app = express();

// Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Carpeta Pública
app.use(express.static('dist'));

// Routing
app.use('/auth', userRoutes);

// Definir puerto
app.listen(3000)