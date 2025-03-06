import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const { email, nombre, token } = datos
  
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'BIENES RAICES: CONFIRMA TU CUENTA',
    text: 'Confirma tu cuenta en BienesRaices.com',
    html: `
        <p>Hola ${nombre}, comprueba tu cuenta en bienesraíces.com</p>
        <p>Tu cuenta ya está lista, solo debes confirmarla en el siguiente enlace: <a href="">Confirmar cuenta</a></p>
        <p>Si tú no creaste, puedes ignorar este mensaje</p>
        `
  })
  
};