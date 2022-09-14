const express = require('express');
const router = express.Router();
const collagecontroller = require('../controllers/collageController')
const interncontroller = require('../controllers/InternController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// ===========================================================
router.post("/functionup/colleges", collagecontroller.createcollage)

router.post("/functionup/interns", interncontroller.createintern)

module.exports = router;