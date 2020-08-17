const AuthController = require('./controller/auth');
const DestinationController = require('./controller/destination');

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.status(200).send({ message: 'welcome' });
  });

  AuthController(app);
  DestinationController(app);
};
