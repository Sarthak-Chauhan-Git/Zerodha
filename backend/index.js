require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.listen(PORT, () => {
  try {
    mongoose.connect(uri);
    console.log("Database Connected!");
  } catch (e) {
    console.log("Database connection error:", e);
  }
  console.log("Backend Listening!");
});
