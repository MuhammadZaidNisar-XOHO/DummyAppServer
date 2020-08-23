const mongoose = require('mongoose'); // to create scheme

const reactSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    ReactName: {type: String},
    ReactVersion: {type: String},
    ReactVolume: {type: String},
 })

 module.exports = mongoose.model("React",reactSchema);