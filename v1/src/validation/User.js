const joi=require('joi')
const userValidation=joi.object({
    full_name:joi.string().required().min(3),
    sur_name:joi.string().required().min(3),
    password:joi.string().required().min(6),
    email:joi.string().email().required().min(3).max(20)
})

module.exports={userValidation}