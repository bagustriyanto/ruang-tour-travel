'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class credential extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.destination_package, { through: 'packages', foreignKey: 'credential_id', as: 'trx_books' })
    }
  };
  credential.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'credential',
    underscored: true,
  });
  return credential;
};