const User=require('../service/User')
const {HashPassword,CreateAccessToken, CreateRefreshToken}=require('../scripts/helper')
const httpStatus = require('http-status')


const Add=async(req,res)=>{
  new User().Add(req.body).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}

const Update=async(req,res,next)=>{
  new User().Update(req.body).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const GetAll=async(req,res,next)=>{
  new User().GetAll().then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const GetById=async(req,res,next)=>{
  new User().GetById(req.params.id).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}
const Remove=async(req,res,next)=>{
  new User().Remove(req.params.id).then(response=>{
    res.send(response)
  }).catch(e=>{
    res.send(e)
  })
}



const Login =async(req,res)=>{
   try {
    const hash=HashPassword(req.body.password)
    req.body.password=hash
    new User().Login(req.body).then(user=>{
      delete user?.password
      if (!user) return res.status(httpStatus.NOT_FOUND).send('user tapilmadi')
      delete user.password
       user={
        ...user.toObject(),
        tokens:{
         accessToken:CreateAccessToken(user),
         refreshToken:CreateRefreshToken(user)
        }
      }
      res.send(user)
    }).catch(e=>{
      res.status(httpStatus.UNPROCESSABLE_ENTITY).send(e)
    })
   } catch (error) {
     res.status(400).send(error.message)
   }
}

module.exports={
  Add,Update,GetAll,GetById,Remove,Login
}