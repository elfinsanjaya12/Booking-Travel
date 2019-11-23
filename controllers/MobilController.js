const {
  Car
} = require("../models")
const Op = require("sequelize").Op

exports.getMobil = async (req, res) => {
  const mobil = await Car.findAll()
  res.render('admin/mobil/view_mobil', {
    title: "Mobil",
    mobil
  })
};


// disini cara ambil view yat ???
exports.getJadwal = async (req, res) => {
  res.render('admin/jadwal/view_jadwal', {
    title: "Mobil",
  })
};

// disini cara ambil view yat ???
exports.getCustomer = async (req, res) => {
  res.render('admin/customer/view_customer', {
    title: "Customer",
  })
};

// disini cara ambil view yat ???
exports.getPesanan = async (req, res) => {
  res.render('admin/pesanan/view_pesanan', {
    title: "Pesanan",
  })
};

// disini cara ambil view yat ???
exports.getPembayaran = async (req, res) => {
  res.render('admin/pembayaran/view_pembayaran', {
    title: "Pembayaran",
  })
};

// disini cara ambil view yat ???
exports.getBank = async (req, res) => {
  res.render('admin/bank/view_bank', {
    title: "Bank",
  })
};



exports.actionCreate = (req, res) => {
  const {
    no_plat,
    jenis_mobil
  } = req.body
  Mobil.create({
    no_plat,
    jenis_mobil
  }).then((result) => {
    console.log(result)
  }).catch((err) => {

  });
}