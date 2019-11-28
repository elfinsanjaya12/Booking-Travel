var express = require("express");
var router = express.Router();
var {
  getBank,
  actionCreateBank,
  actionUpdateBank,
  actionDeteleBank
} = require("../controllers/BankController");

const { auth } = require('../middlewares/auth')

/* get all address */
router.get("/", auth, getBank);
router.post("/", auth, actionCreateBank);
router.put("/:id", auth, actionUpdateBank);
router.delete("/:id", actionDeteleBank);

module.exports = router;