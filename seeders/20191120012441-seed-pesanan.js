'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pesanans', [{
      JadwalId: 1,
      CustomerId: 1,
      titik_jemput: "Jln Abdul Kadir Gg. Pipit No. 224",
      jumlah_kursi: 1,
      total_bayar: 50000,
      no_telp: "082377954007",
      detail_tujuan: "Liwa",
      metode_pembayaran: "Cash"
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pesanans', null, {});

  }
};
