const AuthController = require('./controller/auth');
const DestinationController = require('./controller/destination');
const DestinationPackageController = require('./controller/destination_package');
const DestinationGalleryController = require('./controller/destination_gallery');

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.status(200).send({ message: 'welcome' });
  });

  AuthController(app);
  DestinationController(app);
  DestinationPackageController(app);
  DestinationGalleryController(app);
};
