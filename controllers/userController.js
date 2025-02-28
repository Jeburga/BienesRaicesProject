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

export const forgetPasswordForm = (req, res) => {
    res.render('auth/forget-password', {
        page: 'Recupera tu acceso a Bienes Raíces'
    })
}