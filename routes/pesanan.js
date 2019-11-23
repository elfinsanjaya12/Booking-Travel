var express = require("express");
var router = express.Router();
var {
  getPesanan,
  actionAddPesanan
} = require("../controllers/PesananController");


router.get("/", getPesanan);

/* get all pesanan by customer id */
router.get("/:CustomerId", getPesanan);
router.post("/", actionAddPesanan);



module.exports = router;

