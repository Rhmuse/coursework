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

quoteAPI.get("/", (req, res) => {
  res.send(quotes);
});

quoteAPI.get("/random", (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
