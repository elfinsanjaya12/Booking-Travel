'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync("rahasia", 10);
    return queryInterface.bulkInsert('Customers', [
      {
        username: "fidin",
        password: password,
        role: "driver",
        nama: "Ega",
        no_telp: "089898989",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "rahmat",
        password: password,
        role: "penumpang",
        nama: "Rahmat",
        no_telp: "089898989",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ega",
        password: password,
        role: "penumpang",
        nama: "liyando",
        no_telp: "089898989",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
