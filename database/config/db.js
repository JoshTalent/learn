const mongoose = require('mongoose');
require('dotenv').config();

 const db = mongoose.connect(process.env.MONGO_URI)
 if(db) console.log("MongoDB connected successfully")
module.exports = db;