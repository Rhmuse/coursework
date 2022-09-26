const { application } = require("express");
const express = require("express");
const minionsRouter = require("./minions.js");

const apiRouter = express.Router();

apiRouter.use("/minions", minionsRouter);

module.exports = apiRouter;
