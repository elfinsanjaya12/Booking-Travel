var express = require("express");
var router = express.Router();
var {
  getJadwal,
  getTanggalJadwal
} = require("../controllers/JadwalController");

/* get all address */
router.get("/", getJadwal);
router.get("/:tanggal_berangkat", getTanggalJadwal);

module.exports = router;