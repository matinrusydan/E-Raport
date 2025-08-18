'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Siswa.init({
    nama: DataTypes.STRING,
    nis: DataTypes.STRING,
    nisn: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    jenis_kelamin: DataTypes.STRING,
    agama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kota_asal: DataTypes.STRING,
    kamar: DataTypes.STRING,
    kelas: DataTypes.STRING,
    waliKelasId: DataTypes.INTEGER,
    kepalaSekolahId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Siswa',
  });
  return Siswa;
};