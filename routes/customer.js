var express = require("express");
var router = express.Router();
var {
  getCustomer,
} = require("../controllers/MobilController");

/* get all address */
router.get("/", getCustomer);

module.exports = router;