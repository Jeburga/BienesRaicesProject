import User from '../models/User.js';
import { check, validationResult } from 'express-validator'

export const formLogin = (req, res) => {
    res.render('auth/login', {
        page: 'Iniciar Sesión'
    })
}

export const formRegister = (req, res) => {
    res.render('auth/register', {
        page: 'Crear cuenta'
    })
}

export const register = async(req, res) => {
    // validate
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req);
    await check('email').isEmail().withMessage('Eso no parece un email').run(req);
    await check('password').isLength({min: 6}).withMessage('La contraseña debe ser de al menos 6 caracteres').run(req);
    await check('PasswordRepeated').equals('password').withMessage('Los passwords no son iguales').run(req);

    let result = validationResult(req)

    return res.json({errores: result.array()})
    // Verificar que el resultado esté vacío
    if(!result.isEmpty){
        // Errores
        return res.render('auth/register', {
            pagina: 'Crear cuenta',
            errores: result.array()
        })
    }

    res.json()

    const user = await User.create(req.body);
    res.json(user);
}

export const forgetPasswordForm = (req, res) => {
    res.render('auth/forget-password', {
        page: 'Recupera tu acceso a Bienes Raíces'
    })
}