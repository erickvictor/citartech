const express = require("express");
const app = express();
const CountryService = require("./libs/country");

app.get("/countrycodes", async (req, res, next) => {
  try {
    const countrycodes = await CountryService.listCountries();
    res.json(countrycodes);
  } catch (e) {
    next(e);
  }
});

app.post("/countrycodes", async (req, res, next) => {
  const code = req.query.code;
  const name = req.query.name;

  try {
    const countrycodes = await CountryService.createCountry(code, name);
    res.json(countrycodes);
  } catch (e) {
    next(e);
  }
});

app.use((req, res, next) => {
  res.status(404).json({ error: "not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;