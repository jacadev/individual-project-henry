const { Router } = require("express");
const temperamentsRouter = Router();
const { getTemperamentsHandler, postTemperamentsHandler } = require("../handlers");

temperamentsRouter.get("/", getTemperamentsHandler);
temperamentsRouter.post("/", postTemperamentsHandler);

module.exports = temperamentsRouter;
