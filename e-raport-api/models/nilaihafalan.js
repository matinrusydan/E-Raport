'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NilaiHafalan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NilaiHafalan.init({
    siswaId: DataTypes.INTEGER,
    mataPelajaranId: DataTypes.INTEGER,
    nilai_angka: DataTypes.INTEGER,
    semester: DataTypes.STRING,
    tahun_ajaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NilaiHafalan',
  });
  return NilaiHafalan;
};