const user=require('../model/User')
const BaseService=require('./BaseService')

class User extends BaseService{
   constructor(){
      super(user)
   }
   async Login(data){
      return await user.findOne({'email':data.email,password:data.password})
   }
}

module.exports=User