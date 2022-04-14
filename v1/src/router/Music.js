const express=require('express');
const { Add,GetAll } = require('../controller/Music');
const validate = require('../middlewares/validate');
const { createValidation } = require('../validation/Author');

const router=express.Router();

router.route('/add').post(Add)

router.route('/getall').get(GetAll)

module.exports=router