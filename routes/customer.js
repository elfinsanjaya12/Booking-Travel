var express = require("express");
var router = express.Router();
var {
  signin,
  createCustomer
} = require("../controllers/CustomerController");

/* get all address */
router.post("/signin", signin);

/* create address */
router.post("/", createCustomer);

module.exports = router;