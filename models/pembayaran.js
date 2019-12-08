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

    Pembayaran.belongsTo(sequelize.models.Bank, {
      foreignKey: "BankId"
    });
  };
  return Pembayaran;
};