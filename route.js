const AuthController = require('./controller/auth');

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.status(200).send({ message: 'welcome' });
  });

  AuthController(app);
};
