const crypto=require('crypto-js')
const jwt = require('jsonwebtoken');

const HashPassword=(password)=>{
   return crypto.HmacSHA256(password,crypto.HmacSHA1(password,process.env.PASSWORD_SECRET).toString()).toString()
}

const CreateAccessToken=(data)=>{
        return jwt.sign({...data.toObject()}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 86400*30})
}
const CreateRefreshToken=(data)=>{
        return jwt.sign({...data.toObject()}, process.env.REFRESH_TOKEN_SECRET)
}

const VerifyAccessToken=(token)=>{
   return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}

module.exports={HashPassword,CreateAccessToken,CreateRefreshToken,VerifyAccessToken}