'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kehadirans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siswaId: {
        type: Sequelize.INTEGER
      },
      kegiatan: {
        type: Sequelize.STRING
      },
      izin: {
        type: Sequelize.INTEGER
      },
      sakit: {
        type: Sequelize.INTEGER
      },
      absen: {
        type: Sequelize.INTEGER
      },
      semester: {
        type: Sequelize.STRING
      },
      tahun_ajaran: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Kehadirans');
  }
};