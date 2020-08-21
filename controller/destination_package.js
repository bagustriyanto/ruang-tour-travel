const DestinationPackageService = require('../service/destinationPackageService');

const DestinationPackageController = (app) => {
  app.get('/api/package', (req, res, next) => {
    DestinationPackageService.getPackages(req)
      .then((result) => {
        if (result)
          res.status(200).send(response.set(true, 'Fetch success', result));
        else res.status(200).send(response.set(true, 'Data tidak ditemukan'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.get('/api/package/:id', (req, res, next) => {
    const response = new Response();
    DestinationPackageService.getPackageById(req)
      .then((result) => {
        if (result)
          res.status(200).send(response.set(true, 'Fetch success', result));
        else res.status(200).send(response.set(true, 'Data tidak ditemukan'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.post('/api/package', (req, res, next) => {
    const response = new Response();
    DestinationPackageService.addPackage(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Package berhasil dibuat'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.put('/api/package/:id', (req, res, next) => {
    const response = new Response();
    DestinationPackageService.editPackage(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Package berhasil diubah'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.delete('/api/package/:id', (req, res, next) => {
    const response = new Response();
    DestinationPackageService.removePacakge(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Package berhasil dihapus'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });
};

module.exports = DestinationPackageController;
