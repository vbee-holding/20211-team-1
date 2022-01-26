const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = {
  thumbnail: { type: String },
  link: { type: String },
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
  numOfViews:{type: Number, default: 0}
};

module.exports = mongoose.model("article", Article);