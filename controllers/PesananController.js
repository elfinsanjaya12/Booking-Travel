const {
  Pesanan,
  Jadwal,
  Customer
} = require("../models");
const Op = require("sequelize").Op;


/* get all pesanan */
exports.getPesanan = (req, res) => {
  const { CustomerId } = req.params

  Pesanan.findAll({
    where: { CustomerId: { [Op.eq]: CustomerId } },
    include: [
      { model: Customer },
      { model: Jadwal }
    ],
  }).then(pesanan => {
    res.status(200).json({
      message: 'Success Read Pesanan',
      data: pesanan
    })
  }).catch((err) => {
    res.status(500).json({
      message: 'Something Went Wrong'
    })
  })
}

/* create pesanan */
exports.actionAddPesanan = (req, res) => {
  const {
    JadwalId,
    CustomerId,
    titik_jemput,
    jumlah_kursi,
    total_bayar,
    no_telp,
    detail_tujuan,
    metode_pembayaran,
  } = req.body

  Pesanan.create({
    JadwalId,
    CustomerId,
    titik_jemput,
    jumlah_kursi,
    total_bayar,
    no_telp,
    detail_tujuan,
    metode_pembayaran,
  }).then((pesanan) => {
    res.status(201).json({
      message: 'Success Create Pesanan',
      data: pesanan
    })
  }).catch((err) => {
    res.status(500).json({
      message: 'Something Went Wrong',
    })
  });
}