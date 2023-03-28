const getAllDogs = require("./getAllDogs.controller");
const getDogByName = require("./getDogByName.controller");
const getDogById = require("./getDogById.controller");
const getTemperaments = require("./getTemperaments.controller");
const postDog = require("./postDog.controller");
const postTemperaments = require('./postTemperaments.controller')

module.exports = {
  getAllDogs,
  getDogByName,
  getDogById,
  getTemperaments,
  postDog,
  postTemperaments
};