const {
  Car,
  Jadwal
} = require("../models")
const Op = require("sequelize").Op

exports.getJadwal = (req, res) => {
  const {
    tanggal_berangkat,
    origin,
    destination,
    jam_berangkat
  } = req.body

  Jadwal.findAll({
    where: {
      tanggal_berangkat: { [Op.eq]: tanggal_berangkat },
      origin: { [Op.eq]: origin },
      destination: { [Op.eq]: destination },
      jam_berangkat: { [Op.eq]: jam_berangkat }
    },
    include: [
      { model: Car }
    ],
  }).then((jadwal) => {
    res.status(200).json({ data: jadwal, message: "Success" });
  }).catch((err) => {
    res.status(500).json({ message: "Internal server error" });
  });
};