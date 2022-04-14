const BaseError = require('./baseError');
const httpStatus = require('http-status');

const internalerror=async(req,res,next)=>{
    const error=new BaseError(httpStatus.NOT_FOUND,'Not Found','api404')
    next(error)
}

const ReturnError=async(error,req,res,next)=>{
  try {
    res.status(error.status || 500);
    res.send(error.message)
  } catch (error) {
      next()
  }
}

module.exports = {internalerror,ReturnError}