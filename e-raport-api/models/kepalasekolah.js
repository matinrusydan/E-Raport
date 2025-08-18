'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KepalaSekolah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KepalaSekolah.init({
    nama: DataTypes.STRING,
    nip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KepalaSekolah',
  });
  return KepalaSekolah;
};