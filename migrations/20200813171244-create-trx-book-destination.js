'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trx_book_destinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      package_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'destination_packages',
          key: 'id',
          as: 'package_id'
        }
      },
      credential_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'credentials',
          key: 'id',
          as: 'credential_id'
        }
      },
      status: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trx_book_destinations');
  }
};