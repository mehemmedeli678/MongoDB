const express=require('express')
const config=require('./config')
const loaders=require('./loaders')
const router=require('./server')
const cors=require('cors')
const helmet=require('helmet')
const {ReturnError,internalerror}=require('./errorhandle')
config();
loaders();

const app=express()
app.use(express.json())
app.use(helmet())
// app.use('/',(req,res,next)=>
// {
//     try {
//         if (req.headers.referer!='http://localhost:3000/') {
//             console.log(req.headers.referer);
//             throw new Error("Giriş qadağandır")
//         }
//         next()
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
//     })

app.use(cors())
app.use(router)
app.use(internalerror)
app.use(ReturnError)
app.listen(process.env.PORT,()=>{console.log('App is listening on url http://localhost:'+process.env.PORT)})