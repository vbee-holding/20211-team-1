const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = {
  thumbnail: { type: String },
  link: { type: String, unique:true },
  title: { type: String },
  releaseTime: { type: Number, default: Date.now() },
  isShow: { type: Boolean },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  },
  source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "source"
  },
};

module.exports = mongoose.model("article", Article);
