var express = require("express");
var router = express.Router();
var {
  getJadwal
} = require("../controllers/BookingController");

/* get all address */
router.get("/", getJadwal);

module.exports = router;