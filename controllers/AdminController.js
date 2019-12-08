const {
  Car,
  Bank,
  Jadwal,
  Customer,
  Pesanan,
  Pembayaran
} = require("../models")
const Op = require("sequelize").Op

exports.getMobil = async (req, res) => {
  const mobil = await Car.findAll()
  res.render('admin/mobil/view_mobil', {
    title: "Mobil",
    mobil
  })
};

exports.actionCreateMobil = (req, res) => {
  const { no_plat, jenis_mobil } = req.body
  Car.create({
    no_plat, jenis_mobil
  }).then(() => {
    res.redirect("/admin/mobil")
  }).catch((err) => {
    res.redirect("/admin/mobil")
  });
}


exports.actionDeteleMobile = (req, res) => {
  let { id } = req.params;
  Car.findOne({
    where: { id: { [Op.eq]: id } }
  }).then(async (car) => {
    car.destroy().then(() => {
      res.redirect('/admin/mobil');
    })
  }).catch((err) => {
    res.redirect('/admin/mobil');
  });
}

exports.actionUpdateMobil = async (req, res) => {
  const { id, no_plat, jenis_mobil } = req.body
  try {
    const updateCar = await Car.findOne({
      where: { id: { [Op.eq]: id } }
    })
    if (updateCar) {
      updateCar.no_plat = no_plat
      updateCar.jenis_mobil = jenis_mobil
      await updateCar.save()
    }
    res.redirect('/admin/mobil')
  } catch (error) {
    res.redirect('/admin/mobil')
  }
}

// disini cara ambil view yat ???
exports.getJadwal = async (req, res) => {
  const jadwal = await Jadwal.findAll({
    include: [
      { model: Car }
    ],
  })

  const car = await Car.findAll()
  res.render('admin/jadwal/view_jadwal', {
    title: "Jadwal",
    jadwal,
    car
  })
};

exports.actionCreateJadwal = async (req, res) => {
  const {
    tanggal_berangkat,
    origin,
    destination,
    jam_berangkat,
    MobilId,
    jumlah_kursi,
    harga_perkursi
  } = req.body

  Jadwal.create({
    tanggal_berangkat,
    origin,
    destination,
    jam_berangkat,
    MobilId,
    jumlah_kursi,
    kursi_kosong: 0,
    kursi_terisi: 0,
    harga_perkursi,
    status: "Active"
  }).then(() => {
    res.redirect('/admin/jadwal')
  }).catch((err) => {
    res.redirect('/admin/jadwal')
  });
}

exports.actionDeleteJadwal = async (req, res) => {
  const { id } = req.params
  const jadwal = await Jadwal.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  })
  jadwal.destroy();
  res.redirect('/admin/jadwal');
}

exports.actionUpdateJadwal = (req, res) => {
  const {
    tanggal_berangkat,
    origin,
    destination,
    jam_berangkat,
    MobilId,
    jumlah_kursi,
    harga_perkursi,
    id
  } = req.body
  console.log("sukses")
  console.log(id)
  Jadwal.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then((jadwal) => {
    if (jadwal) {
      jadwal.update({
        tanggal_berangkat,
        origin,
        destination,
        jam_berangkat,
        MobilId,
        jumlah_kursi,
        harga_perkursi,
      }).then(() => {
        res.redirect('/admin/jadwal');
      }).catch((err) => {
        res.redirect('/admin/jadwal');
      });
    }
  }).catch((err) => {
    res.redirect('/admin/jadwal');
  });

}


// disini cara ambil view yat ???
exports.getCustomer = async (req, res) => {
  const user = await Customer.findAll()

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
  Pembayaran.findAll({
    include: [
      { model: Bank },
      { model: Pesanan }
    ]
  }).then((pembayaran) => {
    console.log(pembayaran)
    res.render('admin/pembayaran/view_pembayaran', {
      title: "Pembayaran",
      pembayaran
    })
  }).catch((err) => {

  });
};

// disini cara ambil view yat ???
exports.getBank = async (req, res) => {
  const bank = await Bank.findAll()
  res.render('admin/bank/view_bank', {
    title: "Bank",
    bank
  })
};

exports.actionCreateBank = (req, res) => {
  const { no_rekening, nama_bank, nama_pemilik } = req.body
  Bank.create({
    no_rekening, nama_bank, nama_pemilik
  }).then(() => {
    res.redirect("/admin/bank")
  })
}

exports.actionDeleteBank = async (req, res) => {
  const { id } = req.params
  try {
    const bank = await Bank.findOne({ where: { id: { [Op.eq]: id } } })
    bank.destroy();
    res.redirect("/admin/bank")
  } catch (error) {
    console.log(error)
  }
}

exports.actionUpdateBank = async (req, res) => {
  const { no_rekening, nama_bank, nama_pemilik, id } = req.body

  try {
    const update_bank = await Bank.findOne({ where: { id: { [Op.eq]: id } } })
    console.log(update_bank)
    if (update_bank) {
      update_bank.no_rekening = no_rekening;
      update_bank.nama_bank = nama_bank;
      update_bank.nama_pemilik = nama_pemilik;
      await update_bank.save();
    }
    res.redirect("/admin/bank")
  } catch (error) {
    console.log(error)
  }
}


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