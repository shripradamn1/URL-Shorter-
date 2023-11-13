const express = require("express");
const shortid = require("shortid");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());

const urlDatabase = {};

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shorten", (req, res) => {
  const longUrl = req.body.longUrl;
  const shortUrl = shortid.generate();
  urlDatabase[shortUrl] = longUrl;
  res.json({ shortUrl: shortUrl });
});

app.get("/:shortUrl", (req, res) => {
  const shortUrl = req.params.shortUrl;
  const longUrl = urlDatabase[shortUrl];
  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send("URL not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
