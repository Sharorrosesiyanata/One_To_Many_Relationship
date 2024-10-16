//The Tutorial has only ObjectId in comments array. ref helps us get full fields of Comment when we call populate() method.
const mongoose = require("mongoose");

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    author: String,
    images: [],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  })
);

module.exports = Tutorial;