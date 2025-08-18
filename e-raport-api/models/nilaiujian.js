'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NilaiUjian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NilaiUjian.init({
    siswaId: DataTypes.INTEGER,
    mataPelajaranId: DataTypes.INTEGER,
    pengetahuan_angka: DataTypes.INTEGER,
    keterampilan_angka: DataTypes.INTEGER,
    semester: DataTypes.STRING,
    tahun_ajaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NilaiUjian',
  });
  return NilaiUjian;
};