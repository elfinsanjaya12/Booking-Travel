const {
  Car,
  Jadwal
} = require("../models")
const Op = require("sequelize").Op

/* get all jadwal */
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


/* get tanggal jadwal */
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

/* create jadwal */
exports.createJadwal = (req, res) => {
  const {
    tanggal_berangkat,
    origin,
    destination,
    jam_berangkat,
    MobilId,
    jumlah_kursi,
    kursi_kosong,
    kursi_terisi,
    harga_perkursi
  } = req.body

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
    status: "Active"
  }).then((jadwal) => {
    res.status(201).json({
      message: "Succes Create jadwal",
      data: jadwal,
    });
  }).catch((err) => {
    res.status(500).json({
      message: "Internal server error"
    });
  });

}

// updat data jadwal
exports.actionUpdateJadwal = (req, res) => {
  const { id } = req.params
  const {
    tanggal_berangkat,
    origin,
    destination,
    jam_berangkat,
    MobilId,
    jumlah_kursi,
    harga_perkursi } = req.body
  Jadwal.findOne({
    where: { id: id }
  }).then((jadwal) => {
    if (jadwal) {
      jadwal.update({
        tanggal_berangkat,
        origin,
        destination,
        jam_berangkat,
        MobilId,
        jumlah_kursi,
        harga_perkursi
      }).then((updataJadwal) => {
        res.status(200).json({
          message: 'Success Update jadwal',
          data: updataJadwal
        })
      }).catch((err) => {
        res.status(500).json({
          message: 'Something Went Wrong',
        })
      })
    } else {
      res.status(404).json({
        message: 'Data Not Found',
      })
    }
  }).catch((err) => {
    res.status(500).json({
      message: 'Something Went Wrong',
    })
  })

}

exports.actionDeteleJadwal = (req, res) => {
  const { id } = req.params
  Jadwal.findOne({
    where: {
      id: id
    }
  }).then((jadwal) => {
    jadwal.destroy().then(() => {
      res.status(200).json({
        message: 'Success Delete Jadwal',
        data: jadwal
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Something Went Wrong',
      })
    })
  }).catch((err) => {
    res.status(500).json({
      message: 'Something Went Wrong',
    })
  })
}