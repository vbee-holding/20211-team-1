const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = {
    email : {type : String },
    password : {type : String},
    
}

module.exports = mongoose.model('admin', Admin); 