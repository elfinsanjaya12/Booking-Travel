var express = require("express");
var router = express.Router();
var {
  getMobil,
  getJadwal,
  getCustomer,
  getPesanan,
  getPembayaran,
  getBank
} = require("../controllers/MobilController");

/* get all address */
router.get("/admin/mobil", getMobil);

router.get("/admin/jadwal", getJadwal);

router.get("/admin/customer", getCustomer);

router.get("/admin/pesanan", getPesanan);

router.get("/admin/pembayaran", getPembayaran);

router.get("/admin/bank", getBank);


module.exports = router;