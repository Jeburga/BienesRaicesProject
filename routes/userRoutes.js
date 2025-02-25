import express from 'express';
import { formLogin, formRegister } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get('/login', formLogin);
userRoutes.get('/registro', formRegister);

export default userRoutes;