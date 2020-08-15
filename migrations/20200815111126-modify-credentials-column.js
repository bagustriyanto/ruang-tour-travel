'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('credentials', 'username', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('credentials', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('credentials', 'fullname', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('credentials', 'phone', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('credentials', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('credentials', 'salt', {
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
    await queryInterface.changeColumn('credentials', 'username', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('credentials', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('credentials', 'fullname', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('credentials', 'phone', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('credentials', 'password', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('credentials', 'salt', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
