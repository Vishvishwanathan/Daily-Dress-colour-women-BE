const mongoose = require('mongoose');
require('dotenv').config();


try {
  mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`);
  console.log ("database conneted")
} catch (error) {
  console.log(error);
}

module.exports = mongoose;
