const express=require('express');
const { Add,GetAll,Login } = require('../controller/User');
const { CheckClaim } = require('../middlewares/Auth');
const validate = require('../middlewares/validate');
const { userValidation } = require('../validation/User');

const router=express.Router();

router.route('/add').post(validate(userValidation) ,Add)
router.route('/getall').get(GetAll)
router.get('/login',Login)

module.exports=router