const express = require("express");
const router = express.Router();
const { verify } = require("../auth");
const User = require("../controllers/users");

// route for login
router.post("/login", User.Login);
// router for register
router.post("/register", User.Register);
// route for getting user Details
router.get("/", verify, User.getuser);

module.exports = router;
