const dotenv = require("dotenv");
const Client = require("../models/clientModel");
const Group = require("../models/groupModel");
dotenv.config();

const demoRoute = async (req, res) => {
  try {
    // Perform Action 
    return res.status(200).json({success: true, msg: "Success"});
    
  } catch (error) {
    console.error("Error in handling login request:", error);
    return res.status(500).json({success: false, msg: "Some Error Occurred"});
  }
};

module.exports = {
  demoRoute,
};
