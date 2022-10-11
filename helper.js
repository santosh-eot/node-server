module.exports.loggerMiddleware = (req, res, next)=>{
    try {
        console.log(`${req.method} ${req.path}`);       
        next(); 
    } catch (error) {
        console.log(error)
    }
}

