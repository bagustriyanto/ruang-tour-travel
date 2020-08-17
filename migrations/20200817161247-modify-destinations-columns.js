'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('destinations', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('destinations', 'city', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('destinations', 'province', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('destinations', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('destinations', 'city', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('destinations', 'province', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
