let model=null
class BaseService{
    constructor(BaseModel){
      model=BaseModel
    }
    async GetAll(filter){
    return await model.find(filter)
    }
    async GetById(id){
      return await model.findById(id)
    }
    async Add(data){
      return await new model(data).save()
    }
    async Remove(data){
      console.log(data);
       return await model.findByIdAndUpdate(data.id,data)
    }
    async Remove(id){
      console.log(id);
      return await model.findByIdAndDelete(id)
    }
}

module.exports=BaseService