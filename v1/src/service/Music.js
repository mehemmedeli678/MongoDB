const music=require('../model/Music')
const Baseservice=require('./BaseService')

class Music extends Baseservice{
   constructor(){
      console.log('Music claass');
      super(music)
   }
   // override etme
   async GetAll(filter){
      return await music.find(filter).populate({path:'user_id',select:'full_name'})
   }
}

module.exports=Music