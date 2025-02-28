import express from 'express';
import { formLogin, formRegister, forgetPasswordForm } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get('/login', formLogin);
userRoutes.get('/register', formRegister);
userRoutes.get('/forget-password', forgetPasswordForm);

export default userRoutes;