const Author=require('../service/Author')

const Add=async(req,res)=>{
  new Author().Add(req.body).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}

const Update=async(req,res,next)=>{
  new Author().Update(req.body).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const GetAll=async(req,res,next)=>{
  new Author().GetAll().then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const GetById=async(req,res,next)=>{
  new Author().GetById(req.params.id).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const Remove=async(req,res,next)=>{
  new Author().Remove(req.params.id).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}

module.exports={
    Add,Update,GetAll,GetById,Remove
}