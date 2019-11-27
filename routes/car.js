var express = require("express");
var router = express.Router();
var {
    getCar,
    actionCreateCar
} = require("../controllers/MobilController");

/* get all address */
router.get("/", getCar);
router.post("/", actionCreateCar);

module.exports = router;