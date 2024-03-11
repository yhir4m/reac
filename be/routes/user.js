const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/getAll",userController.getAll);

module.exports = router;