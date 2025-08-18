'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NilaiUjians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siswaId: {
        type: Sequelize.INTEGER
      },
      mataPelajaranId: {
        type: Sequelize.INTEGER
      },
      pengetahuan_angka: {
        type: Sequelize.INTEGER
      },
      keterampilan_angka: {
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
    await queryInterface.dropTable('NilaiUjians');
  }
};