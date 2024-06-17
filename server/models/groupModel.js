const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  type: {
    type: String,
    required: [true, "Type is required"]
  },
  photoURL: {
    type: String,
    required: [true, "Photo URL is required"]
  },
  totalMembers: [{
    type: Number
  }]
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
