const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    usernamne:{type:string , required:true},
    email:{type:string , required:true},
    password:{type:string , required:true},
})

module.exports = mongoose.model("admin" , adminSchema)