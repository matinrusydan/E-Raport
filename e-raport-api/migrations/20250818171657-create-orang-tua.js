'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrangTuas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siswaId: {
        type: Sequelize.INTEGER
      },
      nama_ayah: {
        type: Sequelize.STRING
      },
      pekerjaan_ayah: {
        type: Sequelize.STRING
      },
      alamat_ayah: {
        type: Sequelize.STRING
      },
      nama_ibu: {
        type: Sequelize.STRING
      },
      pekerjaan_ibu: {
        type: Sequelize.STRING
      },
      alamat_ibu: {
        type: Sequelize.STRING
      },
      nama_wali: {
        type: Sequelize.STRING
      },
      pekerjaan_wali: {
        type: Sequelize.STRING
      },
      alamat_wali: {
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
    await queryInterface.dropTable('OrangTuas');
  }
};