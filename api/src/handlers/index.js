const getAllDogsHandler = require('./getAllDogs.handler');
const getDogByNameHandler = require('./getDogByName.handler');
const getDogByIdHandler = require('./getDogById.handler');
const postDogHandler = require('./postDog.handler');
const getTemperamentsHandler = require('./getTemperaments.handler');
const postTemperamentsHandler = require('./postTemperaments.handler');


module.exports = {
  getAllDogsHandler,
  getDogByNameHandler,
  getDogByIdHandler,
  getTemperamentsHandler,
  postDogHandler,
  postTemperamentsHandler
}