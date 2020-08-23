module.exports.cors_authentication= ((req,res,next)=>{ 
        res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actiosn
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
      
        if (req.method === 'OPTIONS') {
          return res.sendStatus(200); // to deal with chrome sending an extra options request
        }
      
        next(); // call next middlewer in line
    })