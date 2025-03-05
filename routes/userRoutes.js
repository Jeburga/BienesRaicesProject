import express from 'express';
import { formLogin, formRegister, forgetPasswordForm, register } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get('/login', formLogin);

userRoutes.get('/register', formRegister);
userRoutes.post('/register', register);

userRoutes.get('/forget-password', forgetPasswordForm);

export default userRoutes;