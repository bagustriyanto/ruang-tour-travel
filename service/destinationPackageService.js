const { destination_packages } = require('../models');
const { Op } = require('sequelize');

class DestinationPackageService {
  static addPackage = async (req) => {
    try {
      const {
        destination_id,
        name,
        price,
        currency = 'IDR',
        description,
      } = req.body;

      await destination_packages.create({
        destination_id,
        name,
        price,
        currency,
        description,
      });
    } catch (error) {
      throw error;
    }
  };

  static editPackage = async (req) => {
    try {
      const {
        id,
        destination_id,
        name,
        price,
        currency = 'IDR',
        description,
      } = req.body;

      const existingData = destination_packages.findByPk(id);
      if (req.params.id !== id || !existingData)
        throw Error('Data tidak ditemukan');

      await destination_packages.update(
        { destination_id, name, price, currency, description },
        { where: { id: id } }
      );
    } catch (error) {
      throw error;
    }
  };

  static removePacakge = async (req) => {
    try {
      const { id } = req.body;

      const existingData = destination_packages.findByPk(id);
      if (req.params.id !== id || !existingData)
        throw Error('Data tidak ditemukan');

      await destination_packages.destroy({ where: { id: id } });
    } catch (error) {
      throw error;
    }
  };

  static getPackages = async (req) => {
    try {
      const { name, limit, page = 1 } = req.query;

      return await destination_packages.findAndCountAll({
        where: {
          name: { [Op.like]: `%${name}%` },
          limit: parseInt(limit),
          offset: (page - 1) * limit,
        },
      });
    } catch (error) {
      throw error;
    }
  };

  static getPackageById = async (req) => {
    const { id } = req.params;

    return await destination_packages.findByPk(id);
  };
}

module.exports = DestinationPackageService;
