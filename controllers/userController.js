export const formLogin = (req, res) => {
    res.render('auth/login', {
        authentication: true
    })
}

export const formRegister = (req, res) => {
    res.render('auth/register', {})
}