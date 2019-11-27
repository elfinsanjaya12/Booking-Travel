const {
  Car,
  Jadwal
} = require("../models")
const Op = require("sequelize").Op

exports.getJadwal = (req, res) => {
  Jadwal.findAll({
    include: [
      { model: Car }
    ],
  }).then((jadwal) => {
    res.status(200).json({ data: jadwal, message: "Success Read Jadwal" });
  }).catch((err) => {
    res.status(500).json({ message: "Internal server error" });
  });
};


exports.getTanggalJadwal = (req, res) => {
  const { tanggal_berangkat } = req.params
  Jadwal.findAll({
    where: { tanggal_berangkat: tanggal_berangkat },
    include: [
      { model: Car }
    ],
  }).then((jadwal) => {
    res.status(200).json({ data: jadwal, message: "Success Read Jadwal Pertanggal" });
  }).catch((err) => {
    res.status(500).json({ message: "Internal server error" });
  });
};

exports.createJadwal = (req, res) => {
  const{
    tanggal_berangkat,
            origin,
            destination,
            jam_berangkat,
            MobilId,
            jumlah_kursi,
            kursi_kosong,
            kursi_terisi,
            harga_perkursi
  } =req.body

  Jadwal.create({
    tanggal_berangkat,
            origin,
            destination,
            jam_berangkat,
            MobilId,
            jumlah_kursi,
            kursi_kosong,
            kursi_terisi,
            harga_perkursi,
            status:"Active"
  }).then((jadwal)=>{
    res.status(201).json({
      message: "Succes Create jadwal baru",
      jadwal,
    });
  }).catch((err)=> {
    res.status(500).json({
      message: "Internal server error"
    });
  });

}






