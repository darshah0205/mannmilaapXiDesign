const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  candidateMobile: {
    type: String,
    required: [true, "Mobile number is required"],
    unique: [true, "Mobile number should be unique"],
  },
  whatsappNumber: {
    type: String,
    required: [true, "Whatsapp number is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  birthdate: {
    type: Date,
    required: [true, "Birthdate is required"]
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: [true, "Gender is required"]
  },
  referencePersonName: {
    type: String,
    required: false
  },
  referencePersonContact: {
    type: String,
    required: false
  },
  groups: [{type: String}],
  dob: {
    type: Date,
    required: [true, "Date of Birth is Required"]
  },
  membershipDate: {
    type: Date,
    required: [true, "Membership date is required"]
  },
  fatherName: {
    type: String
  },
  motherName: {
    type: String
  },
  membershipExpiryDate: {
    type: Date,
    required: [true, "Membership expiry date is required"]
  },
  highestLevelOfEducation: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  religon: {
    type: String,
    required: [true, "Religion is required"]
  },
  caste: {
    type: String,
    required: [true, "Caste is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  bioData: {
    type: String,
    required: false
  }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
