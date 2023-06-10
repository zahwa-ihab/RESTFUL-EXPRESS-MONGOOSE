////THIS FILE CONTAINS ALL USER ROUTES
const express = require("express");
const httpStatusCodes = require("http-status-codes");
const userController = require("../controller/usercontroller");

const router = express.Router();
const user = new userController();

router.get("/", user.getAllUsers);
router.post("/", user.createUser);
router.post("/:name/:age/:email", user.addUser);
router.get("/:name", user.findByName);
router.put("/:name", user.findAndUpdate);
module.exports = router;
