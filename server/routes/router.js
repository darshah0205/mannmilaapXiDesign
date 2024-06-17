const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const controllerLogin = require("../controllers/login");
const multer = require('multer');

// Example route
// router.get("/callback", controllerLogin.callbackCheck);


module.exports = router;
