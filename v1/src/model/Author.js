const mongoose=require('mongoose')

const Schema= new mongoose.Schema({
    name: String
},{versionKey:false,timestamps:true})

module.exports=mongoose.model('Author',Schema)