'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jadwal = sequelize.define('Jadwal', {
    tanggal_berangkat: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    jam_berangkat: DataTypes.STRING,
    MobilId: DataTypes.INTEGER,
    jumlah_kursi: DataTypes.INTEGER,
    kursi_kosong: DataTypes.INTEGER,
    kursi_terisi: DataTypes.INTEGER,
    harga_perkursi: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Jadwal.associate = function (models) {
    // associations can be defined here
    // ini konsep orm jadi
    Jadwal.belongsTo(sequelize.models.Car, {
      foreignKey: "MobilId"
    });
  };
  return Jadwal;
};