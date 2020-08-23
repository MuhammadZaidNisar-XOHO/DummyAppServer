const mongoose = require('mongoose'); // to create scheme

const vueSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    VueName: {type: String},
    VueVersion: {type: String},
    VueVolume: {type: String},
 })

 module.exports = mongoose.model("Vue",vueSchema);