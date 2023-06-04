const router = require("express").Router();
const controller = require("../controllers/controller");
const validateField = require("../middleware/validateField.middleware");

// Insert data
router.post("/insert", validateField, controller.insertData);
// Read data
router.get("/read", controller.readData);
// Read data for id
router.get("/read/:id", controller.readDataId);
// Update data
router.put("/update/:id", validateField, controller.updateData);
// Delete data
router.delete("/delete/:id", controller.deleteData);

module.exports = router;
