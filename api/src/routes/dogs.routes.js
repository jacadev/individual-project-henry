const { Router } = require("express");
const dogsRouter = Router();
const {
  getAllDogsHandler,
  getDogByNameHandler,
  getDogByIdHandler,
  postDogHandler,
} = require("../handlers");

dogsRouter.get("/", getAllDogsHandler);
dogsRouter.post("/", postDogHandler);
dogsRouter.get("/name", getDogByNameHandler);
dogsRouter.get("/:breed_id", getDogByIdHandler);

module.exports = dogsRouter;
