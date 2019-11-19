'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jadwals', [
      {
        tanggal_berangkat: new Date(),
        origin: "Bandar Lampung",
        destination: "Liwa",
        jam_berangkat: "08:00",
        MobilId: 1,
        jumlah_kursi: 6,
        kursi_kosong: 0,
        kursi_terisi: 0,
        harga_perkursi: 50000,
        status: "Active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tanggal_berangkat: new Date(),
        origin: "Bandar Lampung",
        destination: "Liwa",
        jam_berangkat: "09:00",
        MobilId: 2,
        jumlah_kursi: 6,
        kursi_kosong: 0,
        kursi_terisi: 0,
        harga_perkursi: 50000,
        status: "Active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tanggal_berangkat: new Date(),
        origin: "Bandar Lampung",
        destination: "Krui",
        jam_berangkat: "08:00",
        MobilId: 3,
        jumlah_kursi: 6,
        kursi_kosong: 0,
        kursi_terisi: 0,
        harga_perkursi: 50000,
        status: "Active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tanggal_berangkat: new Date(),
        origin: "Bandar Lampung",
        destination: "Bukit Kemuning",
        jam_berangkat: "08:00",
        MobilId: 4,
        jumlah_kursi: 6,
        kursi_kosong: 0,
        kursi_terisi: 0,
        harga_perkursi: 50000,
        status: "Active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tanggal_berangkat: new Date(),
        origin: "Bandar Lampung",
        destination: "Metro",
        jam_berangkat: "08:00",
        MobilId: 5,
        jumlah_kursi: 6,
        kursi_kosong: 0,
        kursi_terisi: 0,
        harga_perkursi: 50000,
        status: "Active",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jadwals', null, {});
  }
};
