var express = require("express");
var router = express.Router();
var {
  viewSignin,
  actionLogin
} = require("../controllers/UserController");

/* GET home page. */
router.get('/', viewSignin);
router.post('/signin/action', actionLogin);

module.exports = router;
