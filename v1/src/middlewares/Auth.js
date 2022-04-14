const {VerifyAccessToken} =require('../scripts/helper')

const CheckClaim=(claim)=>(req,res,next)=>{
try {
    const header=req.headers['authorization']
    const token=header?.split(" ")[1] || null
    const user= VerifyAccessToken(token)
    console.log(user);
    if (user==null || user=='invalid token') {
        return res.send('null')
    }
    if (claim==user.full_name) {
     return next()
    }
    next()
} catch (error) {
    res.status(400).send(error.message)
}
}

module.exports={CheckClaim}