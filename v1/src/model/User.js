const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    full_name:String,
    email:String,
    sur_name:String,
    password:String,
},{versionKey:false,timestamps:true})

module.exports=mongoose.model('user',userSchema)