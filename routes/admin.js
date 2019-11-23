var express = require("express");
var router = express.Router();
var {
  getMobil,
  getJadwal
} = require("../controllers/MobilController");

/* get all address */
router.get("/admin/mobil", getMobil);

router.get("/admin/jadwal", getJadwal);

module.exports = router;