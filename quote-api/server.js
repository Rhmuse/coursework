const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

const quoteAPI = express.Router();

app.use("/api/quotes", quoteAPI);

quoteAPI.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

quoteAPI.get("/", (req, res, next) => {
  res.send(quotes);
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
