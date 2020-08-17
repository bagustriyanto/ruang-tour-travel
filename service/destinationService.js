const { destination } = require('../models');
const { Op, where, fn, col } = require('sequelize');

class DestinationService {
  static addDestination = async (req) => {
    try {
      const { name, city, province, description, thumbnail, status } = req.body;

      await destination.create({
        name,
        city,
        province,
        description,
        thumbnail,
        status,
      });
    } catch (error) {
      throw error;
    }
  };

  static editDestination = async (req) => {
    try {
      const {
        id,
        name,
        city,
        province,
        description,
        thumbnail,
        status,
      } = req.body;

      if (req.params.id !== id) {
        throw Error('Data tidak ditemukan');
      } else {
        const existingData = await destination.findByPk(id);
        if (!existingData) throw Error('Data tidak ditemukan');

        await destination.update(
          { name, city, province, description, thumbnail, status },
          { where: { id: id } }
        );
      }
    } catch (error) {
      throw error;
    }
  };

  static deleteDestination = async (req) => {
    try {
      const { id } = req.body;

      if (req.params.id !== id) {
        throw Error('Data tidak ditemukan');
      }

      await destination.destroy({ where: { id: id } });
    } catch (error) {
      throw error;
    }
  };

  static getDestination = async (req) => {
    try {
      const { name, city, province, status, limit, page = 1 } = req.query;

      return await destination.findAndCountAll({
        where: {
          [Op.or]: [
            name !== '' ? { name: { [Op.like]: `%${name}%` } } : { name: null },
            city !== '' ? { city: { [Op.like]: `%${city}%` } } : { city: null },
            province !== ''
              ? { province: { [Op.like]: `%${province}%` } }
              : { province: null },
            status !== '' ? { status: status } : { status: null },
          ],
        },
        limit: parseInt(limit),
        offset: (page - 1) * limit,
      });
    } catch (error) {
      throw error;
    }
  };

  static getDestinationById = async (req) => {
    try {
      const { id } = req.params;
      const singleDestination = await destination.findByPk(id);
      if (!singleDestination) throw Error('Data tidak ditemukan');

      return singleDestination;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = DestinationService;
