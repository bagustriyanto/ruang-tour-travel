'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destination_package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.destination, { foreignKey: 'destination_id', as: 'destination' })
      this.belongsToMany(models.destination_package, { through: 'packages', foreignKey: 'package_id', as: 'trx_users' })
    }
  };
  destination_package.init({
    destination_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    currency: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'destination_package',
    underscored: true,
  });
  return destination_package;
};