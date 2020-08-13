'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.destination_gallery, { as: 'galleries' })
      this.hasMany(models.destination_package, { as: 'packages' })
    }
  };
  destination.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    description: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'destination',
    underscored: true,
  });
  return destination;
};