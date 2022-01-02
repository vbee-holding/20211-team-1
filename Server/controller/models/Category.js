const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = {
    name : {type : String, required: true },
}

module.exports = mongoose.model('category', Category); 