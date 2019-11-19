'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pembayaran = sequelize.define('Pembayaran', {
    PesananId: DataTypes.INTEGER,
    BankId: DataTypes.INTEGER,
    upload_bukti_bayar: DataTypes.STRING
  }, {});
  Pembayaran.associate = function (models) {
    // associations can be defined here
    Pembayaran.belongsTo(sequelize.models.Pesanan, {
      foreignKey: "PesananId"
    });
  };
  return Pembayaran;
};