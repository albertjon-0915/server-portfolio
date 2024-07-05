const express = require("express");
const router = express.Router();
const User = require("../controllers/users");

// verify user middleware
const { verify } = require("../auth");

// route for login
router.post("/login", User.Login);
// router for register
router.post("/register", User.Register);
// route for getting user Details
router.get("/", verify, User.getuser);

module.exports = router;
