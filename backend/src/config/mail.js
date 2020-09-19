export default {
  secure: false,
  default: {
    from: 'Qwerty team <noreply@qwerty.com.br>',
  },
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};
