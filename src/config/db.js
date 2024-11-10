const mongoose = require('mongoose');
require('dotenv').config();

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB Connection Successfull');
  } catch (error) {
    console.log('Error in Connecting DB', error.message);
  }
};

module.exports = DBConnection;
