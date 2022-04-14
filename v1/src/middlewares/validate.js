const httpstatus=require('http-status')

const validate=(schema)=>(req,res,next)=>{
    const { value, error}=schema.validate(req.body)
    if (error) {
        const errorMessage=error.details?.map((detail)=>detail.message).join(', ');
        res.status(httpstatus.BAD_REQUEST).send(errorMessage)
        return;
    }
    Object.assign(req,value)
    return next();
}

module.exports=validate;