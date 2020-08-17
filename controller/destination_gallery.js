const DestinationGalleryService = require('../service/destinationGalleryService');

const DestinantionGalleryController = (app) => {
  app.get('/api/gallery', function (req, res, next) {
    DestinationGalleryService.getDestGallery(req)
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
    DestinationGalleryService.addDestGallery(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Destinasi berhasil dibuat'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.put('/api/destination/:id', (req, res, next) => {
    const response = new Response();
    DestinationGalleryService.editDestGallery(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Destinasi berhasil diubah'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });

  app.delete('/api/destination/:id', (req, res, next) => {
    const response = new Response();
    DestinationGalleryService.removeDestGallery(req)
      .then(() => {
        res.status(200).send(response.set(true, 'Destinasi berhasil dihapus'));
      })
      .catch((err) => {
        res.status(400).send(response.set(false, err.message));
      });
  });
};

module.exports = DestinantionGalleryController;
