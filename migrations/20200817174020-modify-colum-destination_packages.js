'use strict';

const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('destination_packages', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('destination_packages', 'price', {
      type: Sequelize.DECIMAL,
      allowNull: false,
    });
    await queryInterface.changeColumn('destination_packages', 'currency', {
      type: Sequelize.STRING(3),
      allowNull: false,
      defaultValue: 'IDR',
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('destination_packages', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('destination_packages', 'price', {
      type: Sequelize.DECIMAL,
      allowNull: true,
    });
    await queryInterface.changeColumn('destination_packages', 'currency', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
