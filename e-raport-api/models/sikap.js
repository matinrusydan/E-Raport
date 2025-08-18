'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sikap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sikap.init({
    siswaId: DataTypes.INTEGER,
    jenis_sikap: DataTypes.STRING,
    indikator: DataTypes.STRING,
    angka: DataTypes.FLOAT,
    deskripsi: DataTypes.TEXT,
    semester: DataTypes.STRING,
    tahun_ajaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sikap',
  });
  return Sikap;
};