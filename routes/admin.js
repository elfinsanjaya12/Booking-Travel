var express = require("express");
var router = express.Router();
var {
  getMobil,
  actionCreateMobil,
  actionDeteleMobile,
  actionUpdateMobil,
  getJadwal,
  actionCreateJadwal,
  actionUpdateJadwal,
  getCustomer,
  getPesanan,
  getPembayaran,
  getBank,
  actionCreateBank,
  actionUpdateBank,
  actionDeleteBank,
  actionDeleteJadwal
} = require("../controllers/AdminController");

/* get all car */
router.get("/admin/mobil", getMobil);
router.post("/admin/mobil", actionCreateMobil);
router.get("/admin/mobil/:id", actionDeteleMobile);
router.post("/admin/mobil/update", actionUpdateMobil);

router.get("/admin/jadwal", getJadwal);
router.post("/admin/jadwal", actionCreateJadwal);
router.get("/admin/jadwal/delete/:id", actionDeleteJadwal);
router.post("/admin/jadwal/update", actionUpdateJadwal);

router.get("/admin/customer", getCustomer);

router.get("/admin/pesanan", getPesanan);

router.get("/admin/pembayaran", getPembayaran);

router.get("/admin/bank", getBank);
router.post("/admin/bank", actionCreateBank);
router.get("/admin/bank/delete/:id", actionDeleteBank);
router.post("/admin/bank/update", actionUpdateBank);


module.exports = router;