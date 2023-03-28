const { Router } = require("express");
const mainRouter = Router();
const dogsRouter = require("../routes/dogs.routes");
const temperamentsRouter = require("../routes/temperaments.routes");

mainRouter.use("/dogs", dogsRouter);
mainRouter.use("/temperaments", temperamentsRouter);

module.exports = mainRouter;