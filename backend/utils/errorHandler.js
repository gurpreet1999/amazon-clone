class ErrorHandler extends Error {

constructor(message,statuscode){
    super(message)
    this.statusCode = statusCode
}


}


module.exports=ErrorHandler