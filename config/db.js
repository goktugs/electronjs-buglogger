const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = mongoose.connect(
      'mongodb+srv://goko36:goko36@cluster0.g8bfqaw.mongodb.net/buglogger?retryWrites=true&w=majority'
    );

    console.log('connect4ed');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
