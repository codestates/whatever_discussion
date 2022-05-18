'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('disagrees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      articles_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'articles', key: 'id' }
      },
      users_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('disagrees');
  }
};