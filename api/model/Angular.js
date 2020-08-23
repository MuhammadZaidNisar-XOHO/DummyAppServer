const mongoose = require('mongoose'); // to create scheme

const angularSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    NodeName: {type: String},
    NodeVersion: {type: String},
    NodeVolume: {type: String},
 })

 module.exports = mongoose.model("Angular",angularSchema);