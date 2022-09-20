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
  const authorName = req.query.person;
  if (authorName) {
    let quoteArr = quotes.filter(
      (quote) => quote.person.toLowerCase() === authorName.toLowerCase()
    );
    if (quoteArr.length > 0) {
      res.send({ quotes: quoteArr });
    } else {
      res.send({ quotes: quotes });
    }
  } else {
    res.send({ quotes: quotes });
  }
});

quoteAPI.get("/random", (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

quoteAPI.post("/", (req, res) => {
  const quote = req.query.quote;
  const person = req.query.person;
  if (quote && person) {
    const formatedQuote = {
      quote: quote,
      person: person,
    };
    quotes.push(formatedQuote);
    res.send({ quote: formatedQuote });
  } else {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
