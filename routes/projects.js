const express = require("express");
const router = express.Router();
const Project = require("../controllers/projects");
const Tech = require("../controllers/technologies");

// get projects route
router.get("/", Project.getProjects);
router.get("/tech", Tech.getTechs);

module.exports = router;
