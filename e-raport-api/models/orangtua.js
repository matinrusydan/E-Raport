'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrangTua extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrangTua.init({
    siswaId: DataTypes.INTEGER,
    nama_ayah: DataTypes.STRING,
    pekerjaan_ayah: DataTypes.STRING,
    alamat_ayah: DataTypes.STRING,
    nama_ibu: DataTypes.STRING,
    pekerjaan_ibu: DataTypes.STRING,
    alamat_ibu: DataTypes.STRING,
    nama_wali: DataTypes.STRING,
    pekerjaan_wali: DataTypes.STRING,
    alamat_wali: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrangTua',
  });
  return OrangTua;
};