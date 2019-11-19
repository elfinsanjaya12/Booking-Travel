'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cars', [
      {
        no_plat: "BE 1989 YJ",
        jenis_mobil: "Avanza",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_plat: "BE 1234 Yk",
        jenis_mobil: "Xenia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_plat: "BE 1489 YJ",
        jenis_mobil: "Xenia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_plat: "BE 1939 KM",
        jenis_mobil: "Xenia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_plat: "BE 1995 KN",
        jenis_mobil: "Honda Jazz",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});

  }
};
