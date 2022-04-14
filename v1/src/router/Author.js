const express=require('express');
const { Add,GetAll,GetById,Remove,Update } = require('../controller/Author');
const validate = require('../middlewares/validate');
const { createValidation } = require('../validation/Author');

const router=express.Router();

router.route('/').post(Add)
router.route('/').get(GetAll)
router.get('/:id',GetById)
router.delete('/:id',Remove)
router.put('/',Update)
module.exports=router