const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const controllerLogin = require("../controllers/login");
const controllerSignUp = require("../controllers/signup");
const upload = require("../utils/upload");


// Example route
// router.get("/callback", controllerLogin.callbackCheck);

router.post("/signup", upload.single('file'), controllerSignUp.createAccount);


module.exports = router;
