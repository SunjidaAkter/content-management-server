const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// middlewares
app.use(express.json());
app.use(cors());

//routes
const contentRoute = require("./routes/v1/content.route");

//checking routes
app.get("/", (req, res) => {
  res.send("working properly!");
});

app.use("/content", contentRoute);

module.exports = app;
