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



exports.actionCreate = (req, res) => {
  const { no_plat, jenis_mobil } = req.body
  Mobil.create({
    no_plat, jenis_mobil
  }).then((result) => {
    console.log(result)
  }).catch((err) => {

  });
}