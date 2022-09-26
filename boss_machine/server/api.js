const { application } = require("express");
const express = require("express");
const minionsRouter = require("./minions.js");
const ideasRouter = require("./ideas.js");
const meetingsRouter = require("./meetings.js");

const apiRouter = express.Router();

apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRouter);

module.exports = apiRouter;
