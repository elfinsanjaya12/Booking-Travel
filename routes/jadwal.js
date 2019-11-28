var express = require("express");
var router = express.Router();
var {
  getJadwal,
  getTanggalJadwal,
  createJadwal,
  actionUpdateJadwal,
  actionDeteleJadwal
} = require("../controllers/JadwalController");

const { auth } = require('../middlewares/auth')

router.get("/", auth, getJadwal);
/* get all jadwal by tanggal */
router.get("/:tanggal_berangkat", auth, getTanggalJadwal);

/* create jadwal  */
router.post("/", auth, createJadwal);

// update jadwal
router.put("/edit/:id", auth, actionUpdateJadwal);

// delete jadwal
router.delete("/delete/:id", auth, actionDeteleJadwal);



module.exports = router;