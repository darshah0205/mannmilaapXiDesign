const Client = require("../models/clientModel");
const Group = require("../models/groupModel");
const cron = require('node-cron');



async function removeExpiredMembers() {
    const now = new Date();
    try {
      const result = await Member.deleteMany({ expiryDate: { $lte: now } });
      console.log(`Deleted ${result.deletedCount} expired members`);
    } catch (error) {
      console.error('Error deleting expired members:', error);
    }
  }