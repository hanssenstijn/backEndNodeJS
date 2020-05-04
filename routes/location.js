const express = require("express");

const { getAllLocations } = require('../controllers/location');

//Creating Router() object
const router = express.Router();

// Provide all routes here, this is for Home page.
router.get("/", getAllLocations);

module.exports = router;
