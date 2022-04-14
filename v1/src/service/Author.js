const author=require('../model/Author')
const BaseService=require('./BaseService')

class Author extends BaseService{
   constructor(){
      super(author)
   }
}

module.exports=Author