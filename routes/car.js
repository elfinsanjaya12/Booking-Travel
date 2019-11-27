var express = require("express");
var router = express.Router();
var {
  getCar,
  actionCreateCar,
  actionUpdateCar,
  actionDeteleCar
} = require("../controllers/MobilController");

/* get all address */
router.get("/", getCar);
router.post("/", actionCreateCar);
router.put("/:id", actionUpdateCar);
router.delete("/:id", actionDeteleCar);

module.exports = router;