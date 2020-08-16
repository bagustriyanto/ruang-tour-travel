const DestinationService = require('../service/destinationService');
const Response = require('../response');

const DestinationController = (app) => {
  const response = new Response();

  app.get('/api/destination', (req, res, next) => {
    DestinationService.getDestination(req)
      .then((result) => {
        if (result)
          res.status(200).send(response.set(true, 'Fetch success', result));
        else res.status(200).send(response.set(true, 'Data tidak ditemukan'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.get('/api/destination/:id', (req, res, next) => {
    const response = new Response();
    DestinationService.getDestinationById(req)
      .then((result) => {
        if (result)
          res.status(200).send(response.set(true, 'Fetch success', result));
        else res.status(200).send(response.set(true, 'Data tidak ditemukan'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.post('/api/destination', (req, res, next) => {
    const response = new Response();
    DestinationService.addDestination(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Destinasi berhasil dibuat'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.put('/api/destination/:id', (req, res, next) => {
    const response = new Response();
    DestinationService.editDestination(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Destinasi berhasil diubah'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.delete('/api/destination/:id', (req, res, next) => {
    const response = new Response();
    DestinationService.editDestination(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Destinasi berhasil dihapus'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });
};

module.exports = DestinationController;
