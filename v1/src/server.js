const express=require('express')

const router=express.Router()

const author=require('./router/Author')
const user=require('./router/User')
const music=require('./router/Music')

router.use('/api/users',user)
router.use('/api/authors',author)
router.use('/api/musics',music)
module.exports=router