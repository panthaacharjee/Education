const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  courseCode: {
    type: String,
  },

  courseTitle: {
    type: String,
  },
  image: {
    type: String,
  },
  dept: {
    type: String,
  },
  semester: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("question", questionSchema);
