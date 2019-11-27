var express = require("express");
var router = express.Router();
var {
  signin,
  createCustomer,
  getCustomer
} = require("../controllers/CustomerController");

/* get all address */
router.post("/signin", signin);

/* get all car router */
router.get("/", getCustomer);

/* create address */
router.post("/", createCustomer);

module.exports = router;