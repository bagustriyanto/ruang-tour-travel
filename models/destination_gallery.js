'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destination_gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.destination, {
        foreignKey: 'destination_id',
        as: 'destination',
      });
    }
  }
  destination_gallery.init(
    {
      destination_id: DataTypes.INTEGER,
      path: DataTypes.STRING,
      image: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: 'destination_gallery',
      underscored: true,
    }
  );
  return destination_gallery;
};
