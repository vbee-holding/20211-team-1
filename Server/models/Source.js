const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Source = {
    name : {type : String},
    logo : {type : String},
    url :  {type : String},
}

module.exports = mongoose.model('source', Source); 