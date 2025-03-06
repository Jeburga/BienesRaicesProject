import User from '../models/User.js';
import { check, validationResult } from 'express-validator'
import { generarId } from '../helpers/tokens.js';
import { emailRegistro } from '../helpers/emails.js'

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
    // Validaciones
    await check('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .run(req);

    await check('email')
        .isEmail().withMessage('Eso no parece un email')
        .run(req);
    
    await check('password')
        .isLength({min: 6}).withMessage('La contraseña debe ser de al menos 6 caracteres')
        .run(req);
    
    await check('PasswordRepeated')
        .equals(req.body.password)
        .withMessage('Debe confirmar la contraseña')
        .run(req);

    let result = validationResult(req)

    // Verificar que el resultado esté vacío
    if(!result.isEmpty()){
        // Errores
        return res.render('auth/register', {
            pagina: 'Crear cuenta',
            errores: result.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    const { nombre, email, password } = req.body;

    const userExisted = await User.findOne({where: { email }});

    if(userExisted) {
        return res.render('auth/register', {
            pagina: 'Crear cuenta',
            errores: [{msg: 'El usuario ya está registrado'}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    // Almacenar un usuario
    const usuario = await User.create({
        nombre,
        email,
        password,
        token: generarId()
    })

    // Envia email de confirmación
    emailRegistro({
        nombre: usuario.nombre,
        email: usuario.email,
        token: usuario.token
    })

    // Mostrar mensaje de confirmación
    res.render('template/message', {
        pagina: 'Cuenta creada correctamente',
        mensaje: 'Verifica tu email, te hemos enviado un token de verificación'
    })
}

export const forgetPasswordForm = (req, res) => {
    res.render('auth/forget-password', {
        page: 'Recupera tu acceso a Bienes Raíces'
    })
}