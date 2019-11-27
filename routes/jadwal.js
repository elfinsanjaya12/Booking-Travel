var express = require("express");
var router = express.Router();
var {
  getJadwal,
  getTanggalJadwal,
  createJadwal
} = require("../controllers/JadwalController");

/* get all address */
router.get("/", getJadwal);
router.get("/:tanggal_berangkat", getTanggalJadwal);

/* create jadwal */
router.post("/", createJadwal);

module.exports = router;