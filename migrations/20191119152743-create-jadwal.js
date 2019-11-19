'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jadwals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal_berangkat: {
        type: Sequelize.DATEONLY
      },
      origin: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      jam_berangkat: {
        type: Sequelize.STRING
      },
      MobilId: {
        type: Sequelize.INTEGER
      },
      jumlah_kursi: {
        type: Sequelize.INTEGER
      },
      kursi_kosong: {
        type: Sequelize.INTEGER
      },
      kursi_terisi: {
        type: Sequelize.INTEGER
      },
      harga_perkursi: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jadwals');
  }
};