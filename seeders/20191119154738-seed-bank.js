'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Banks', [
      {
        no_rekening: "12312313123",
        nama_bank: "BCA",
        nama_pemilik: "Ega"
      },
      {
        no_rekening: "839273981312",
        nama_bank: "Mandiri",
        nama_pemilik: "Ega"
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Banks', null, {});

  }
};
