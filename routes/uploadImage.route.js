const router = require("express").Router();
const controller = require("../controllers/upload.controller");
// Upload Data
router.post("/upload", controller.uploadData);

module.exports = router;
