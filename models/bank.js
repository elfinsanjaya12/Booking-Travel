'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    no_rekening: DataTypes.STRING,
    nama_bank: DataTypes.STRING,
    nama_pemilik: DataTypes.STRING
  }, {});
  Bank.associate = function(models) {
    // associations can be defined here
  };
  return Bank;
};