const express = require("express");
const { testportcontroller } = require("../controllers/portal_controller");

// routes object
const routes = express.Router();

// Routes
routes.post('/test',testportcontroller);


module.exports = {routes};