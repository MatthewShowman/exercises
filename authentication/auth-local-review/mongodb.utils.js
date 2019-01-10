const mongoose = require("mongoose");

exports.connect = () => {
  mongoose.connect("mongodb://localhost/auth-local-review");
}

exports.createEventListeners = () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected!");
  })

  mongoose.connection.on("error", () => {
    console.log("Error connecting to the database");
  })
}