const mongoose=require('mongoose')

const Schema= new mongoose.Schema({
    name: String,
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    }
},{versionKey:false,timestamps:true})

module.exports=mongoose.model('music',Schema)