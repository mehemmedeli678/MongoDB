const Music=require('../service/Music')

const Add=async(req,res)=>{
  new Music().Add(req.body).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}

const Update=async(req,res,next)=>{
  new Music().Update(req.body).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const GetAll=async(req,res,next)=>{
  new Music().GetAll().then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const GetById=async(req,res,next)=>{
  new Music().GetById(req.params.id).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const Remove=async(req,res,next)=>{
  new Music().Remove(req.params.id).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}

module.exports={
  Add,Update,GetAll,GetById,Remove
}