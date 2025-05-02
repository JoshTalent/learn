const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pr_name:{type:String,required:true},
    pr_price:{type:Number,required:true},
    pr_desc:{type:String,required:true},
})


module.exports = mongoose.model("product" , productSchema)

