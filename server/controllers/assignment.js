const dotenv = require("dotenv");
const Client = require("../models/clientModel");
const Group = require("../models/groupModel");
const { default: mongoose } = require("mongoose");



const assignGroup = async (req, res) => {

  try {

    var groupName = req.body.groupName;
    // var groupName = "Group 2";
    var userid = req.body.id;
    var user = await Client.findById(userid);

    if (!user) {
        return res.status(200).json({success: true, msg: "No Such User Exist !"});
    }

    // const wasPresent = user.groupRequest.includes(groupName);
    // if (!wasPresent) {
    //     return res.status(200).json({success: true, msg: "User does not want to be a part of this group"});
    // }

    const group = await Group.findOne({name: groupName});
    if (!group) {
        return res.status(200).json({success: true, msg: "No such Group in Existance !"});
    }

    user.groupRequest = user.groupRequest.filter((field) => field !== groupName);
    user.groups.push(group._id);
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 90);

    user.groupsExpiry.push({
        name: group.name,
        expiry: expiryDate
    });

    group.members.push({
        member: user._id,
        expiry: expiryDate
    });

    user.save();
    group.save();
    // const new_id = new mongoose.Types.ObjectId("66728fdf1a340c9e2530bbb2");
    return res.status(200).json({success: true, msg: `Successfully assigned ${group.name} to ${user.name} !`});
    
  } catch (error) {
    console.error("Error in handling login request:", error);
    return res.status(500).json({success: false, msg: "Some Error Occurred"});
  }
};

module.exports = {
  assignGroup,
};
