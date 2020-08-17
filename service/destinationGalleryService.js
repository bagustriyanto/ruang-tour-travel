const { destination_galleries } = require('../models');
const { parse } = require('path-to-regexp');

class DestinationGalleryService {
  static addDestGallery = async (req) => {
    try {
      const { destination_id, image } = req.body;

      await destination_galleries.create({ destination_id, image });
    } catch (error) {
      throw error;
    }
  };
  static editDestGallery = async (req) => {
    try {
      const { id, destination_id, image } = req.body;

      if (req.params.id !== id) throw Error('Data tidak ditemukan');

      await destination_galleries.update(
        { destination_id, image },
        { where: { id: id } }
      );
    } catch (error) {
      throw error;
    }
  };
  static removeDestGallery = async (req) => {
    try {
      const { id } = req.body;

      if (req.params.id !== id) throw Error('Data tidak ditemukan');

      await destination_galleries.destroy({ where: { id: id } });
    } catch (error) {
      throw error;
    }
  };
  static getDestGallery = async (req) => {
    const { limit, page = 1 } = req.body;
    return await destination_galleries.findAndCountAll({
      limit: parseInt(limit),
      offset: (page - 1) * limit,
    });
  };
}

module.exports = DestinationGalleryService;
