var express = require("express");
var router = express.Router();
var {
  getMobil,
  actionCreateMobil,
  actionDeteleMobile,
  actionUpdateMobil,
  getJadwal,
  getCustomer,
  getPesanan,
  getPembayaran,
  getBank
} = require("../controllers/AdminController");

/* get all car */
router.get("/admin/mobil", getMobil);
router.post("/admin/mobil", actionCreateMobil);
router.get("/admin/mobil/:id", actionDeteleMobile);
router.post("/admin/mobil/update", actionUpdateMobil);

router.get("/admin/jadwal", getJadwal);

router.get("/admin/customer", getCustomer);

router.get("/admin/pesanan", getPesanan);

router.get("/admin/pembayaran", getPembayaran);

router.get("/admin/bank", getBank);


module.exports = router;