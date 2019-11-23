const {
  Car,
  Bank,
  Jadwal,
  Customer,
  Pesanan
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
  const jadwal = await Jadwal.findAll({
    include: [
      { model: Car }
    ],
  })
  res.render('admin/jadwal/view_jadwal', {
    title: "Jadwal",
    jadwal
  })
};

// disini cara ambil view yat ???
exports.getCustomer = async (req, res) => {
  const user = await Customer.findAll()
  console.log(user)
  res.render('admin/customer/view_customer', {
    title: "Customer",
    user
  })
};

// disini cara ambil view yat ???
exports.getPesanan = async (req, res) => {
  const pesanan = await Pesanan.findAll({
    include: [
      { model: Jadwal },
      { model: Customer }
    ],
  })
  res.render('admin/pesanan/view_pesanan', {
    title: "Pesanan",
    pesanan
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
  const bank = await Bank.findAll()
  res.render('admin/bank/view_bank', {
    title: "Bank",
    bank
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