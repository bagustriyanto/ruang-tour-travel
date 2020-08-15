const AuthService = require('../service/authService');

const AuthController = (app) => {
  app.post('/api/registration', function (req, res, next) {
    AuthService.registration(req)
      .then(() => {
        res.status(200).send({ message: 'Registrasi Berhasil' });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  });
};

module.exports = AuthController;
