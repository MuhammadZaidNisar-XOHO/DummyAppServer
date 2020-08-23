// to generate objectId if required
const mongoose = require('mongoose'); 

//import all require models
const angularModel = require('../model/Angular');
const reactModel = require('../model/React');
const vueModel = require('../model/Vue');

module.exports.addAngularSummary = (req,res,next) => {
    if (req.body.AngularData != ''){
    const angularSummary=new angularModel({
        _id: new mongoose.Types.ObjectId(), 
        NodeName: req.body.AngularData.NodeName,
        NodeVersion: req.body.AngularData.NodeVersion,
        NodeVolume: req.body.AngularData.NodeVolume,
      });
      // save is a method provided by moongoose, which we can use on mongoose models, will then store this in the database
      angularSummary.save().then(result=>{ // then acts a promise that will get back the result of that operation
          console.log(result);
      }).catch(error=>{ // catches the potental error
          console.log(error);
          res.status(500).json({ // code 201 "resource has been created successfully"
          message : "Angular Summary nor Posted",
          Error: error 
               });
           });
        }
        next();
};

module.exports.addReactSummary = (req,res,next) => {
    if (req.body.ReactData != ''){
    const reactSummary=new reactModel({
        _id: new mongoose.Types.ObjectId(), 
        ReactName: req.body.ReactData.ReactName,
        ReactVersion: req.body.ReactData.ReactVersion,
        ReactVolume: req.body.ReactData.ReactVolume,
      });
      // save is a method provided by moongoose, which we can use on mongoose models, will then store this in the database
      reactSummary.save().then(result=>{ // then acts a promise that will get back the result of that operation
          console.log(result);
      }).catch(error=>{ // catches the potental error
          console.log(error);
          res.status(500).json({ // code 201 "resource has been created successfully"
          message : "React Summary nor Posted",
          Error: error 
               });
           });
        }
    next();
};

module.exports.addVueSummary = (req,res,next) => {
    if (req.body.VueData != ''){
    const vueSummary=new vueModel({
        _id: new mongoose.Types.ObjectId(), 
        VueName: req.body.VueData.VueName,
        VueVersion: req.body.VueData.VueVersion,
        VueVolume: req.body.VueData.VueVolume,
      });
      // save is a method provided by moongoose, which we can use on mongoose models, will then store this in the database
      vueSummary.save().then(result=>{ // then acts a promise that will get back the result of that operation
          console.log(result);
      }).catch(error=>{ // catches the potental error
          console.log(error);
          res.status(500).json({ // code 201 "resource has been created successfully"
          message : "vue Summary nor Posted",
          Error: error 
               });
           });
        }
};


