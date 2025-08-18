'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kehadiran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kehadiran.init({
    siswaId: DataTypes.INTEGER,
    kegiatan: DataTypes.STRING,
    izin: DataTypes.INTEGER,
    sakit: DataTypes.INTEGER,
    absen: DataTypes.INTEGER,
    semester: DataTypes.STRING,
    tahun_ajaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kehadiran',
  });
  return Kehadiran;
};