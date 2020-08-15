'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trx_book_destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.credential, { foreignKey: 'credential_id' })
      this.belongsTo(models.destination_package, { foreignKey: 'package_id' })
    }
  };
  trx_book_destination.init({
    package_id: DataTypes.INTEGER,
    credential_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trx_book_destination',
    underscored: true,
  });
  return trx_book_destination;
};