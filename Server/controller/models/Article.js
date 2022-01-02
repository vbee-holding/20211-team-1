const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = {
    thumbnail : {type : String },
    link : {type : String},
    title : {type : String},
    releaseTime : {type : Date, default: Date.now},
    sapo : {type : String},
    status : {type : String},
    categoryIds : [{type : String}],
    sourceId : {type : String, require : true},
    
}

module.exports = mongoose.model('article', Article); 