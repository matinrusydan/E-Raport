'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Siswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nis: {
        type: Sequelize.STRING
      },
      nisn: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kota_asal: {
        type: Sequelize.STRING
      },
      kamar: {
        type: Sequelize.STRING
      },
      kelas: {
        type: Sequelize.STRING
      },
      waliKelasId: {
        type: Sequelize.INTEGER
      },
      kepalaSekolahId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Siswas');
  }
};