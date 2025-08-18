'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sikaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siswaId: {
        type: Sequelize.INTEGER
      },
      jenis_sikap: {
        type: Sequelize.STRING
      },
      indikator: {
        type: Sequelize.STRING
      },
      angka: {
        type: Sequelize.FLOAT
      },
      deskripsi: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Sikaps');
  }
};