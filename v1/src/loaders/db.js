const mongoose = require("mongoose");
const config=require('../config')
config()

const connectDB=async ()=>{
mongoose.connect(process.env.Atlas_URI,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('conneted mongo');
}).catch(()=>{
    console.log('can`t connected mongo');
})
}

module.exports={connectDB}