var express = require("express");
var router = express.Router();
var {
  signin,
} = require("../controllers/CustomerController");

/* get all address */
router.post("/signin", signin);

module.exports = router;