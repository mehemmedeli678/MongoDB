const Logger=require('../scripts/Logger')

class BaseError extends Error{
constructor(statusCode,message,location){
super(message)
this.message=message
this.status=statusCode
const date=new Date();
Logger.log({
    level:'error',
    message:message,
    location:location,
    date:date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()+'/'+date.getHours()+':'+date.getMinutes()
})
}
}

module.exports=BaseError