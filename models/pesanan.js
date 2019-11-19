'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pesanan = sequelize.define('Pesanan', {
    JadwalId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    titik_jemput: DataTypes.STRING,
    jumlah_kursi: DataTypes.INTEGER,
    total_bayar: DataTypes.INTEGER,
    no_telp: DataTypes.STRING,
    detail_tujuan: DataTypes.STRING,
    metode_pembayaran: DataTypes.STRING
  }, {});
  Pesanan.associate = function (models) {
    // associations can be defined here
    Pesanan.belongsTo(sequelize.models.Jadwal, {
      foreignKey: "JadwalId"
    });

    Pesanan.belongsTo(sequelize.models.Customer, {
      foreignKey: "CustomerId"
    });
  };
  return Pesanan;
};