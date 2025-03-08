import express from 'express';
import { formLogin, formRegister, forgetPasswordForm, register, confirm } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get('/login', formLogin);

userRoutes.get('/register', formRegister);
userRoutes.post('/register', register);

userRoutes.get('/confirm/:token', confirm);

userRoutes.get('/forget-password', forgetPasswordForm);

export default userRoutes;