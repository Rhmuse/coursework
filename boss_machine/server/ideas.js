const express = require("express");
const ideasRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");

ideasRouter.use("/", (req, res, next) => {
  console.log("ideasRouter accessed at ", Date.now());
  next();
});

ideasRouter.get("/", (req, res, next) => {
  const allIdeas = getAllFromDatabase("ideas");
  res.send(allIdeas);
});

module.exports = ideasRouter;
