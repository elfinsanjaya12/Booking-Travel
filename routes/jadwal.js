var express = require("express");
var router = express.Router();
var {
  getJadwal,
} = require("../controllers/JadwalController");

/* get all address */
router.get("/", getJadwal);

module.exports = router;