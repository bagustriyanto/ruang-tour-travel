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

  app.post('/api/login', function (req, res, next) {
    AuthService.login(req)
      .then((result) => {
        if (!req.session.user) req.session.user = result.username;
        res
          .status(200)
          .send({
            message: 'Login berhasil',
            token: result.token,
            status: true,
          });
      })
      .catch((err) => {
        res.status(401).send({ message: 'Login gagal', status: false });
      });
  });
};

module.exports = AuthController;
