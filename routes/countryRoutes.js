const express = require("express");
const countryController = require("../controller/countryController");
const countryRouter = express.Router();
const Country = require("../model/Country");

countryRouter.get("/", countryController.index);

module.exports = countryRouter;
