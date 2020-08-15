'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.renameColumn('destination_galleries', 'path', 'image');
    await queryInterface.changeColumn('destination_galleries', 'image', {
      type: Sequelize.BLOB('long'),
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('destination_galleries', 'image', 'path');
    await queryInterface.changeColumn('destination_galleries', 'path', {
      type: Sequelize.STRING,
    });
  },
};
