// this file will be used to check for valid tokens
// to check whether the user is authenticated or not

const jwt=require('jsonwebtoken'); 

module.exports = (req,res,next)=>{ // default middlewear pattern we use in express app
    try{
        // token will be requested in headers instead of in request body but most likely we dont req token in body section
        //token will be requested in headers as:authorization and by convention write 'Bearer whitespace and token'
        const token = req.headers.authorization.split(' ')[1]; // we need to include only part at index 1 which is token after the whitespace while at index 0 is 'bearer' which we dont need
        // and therefore we dont specify it. And therefore we split it with ' ' because token is placed after whitespace. you can console.log without split function for better understadning
        console.log(token);
        // verify method returns decoded token if succeeed/verified successfully
        // 1st arugment is the passed token and 2nd argument is the secret key associated with the token
        // the method will throw an error if it fails so we will use try and catch block
        const decode = jwt.verify(token,'secret')
        req.userDate = decode; // so i am adding new field to my request so that in future we can extract user's decoded data on userData field
        next(); //calls next middlewear function if successfully authenticate
    }catch(error){
        res.status(404).json({
            Message: "Auth failed" ,
            Error: error
        })
    };
}