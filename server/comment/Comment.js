const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: String,
  date: {
      type: Date,
      default: Date.now
  },
  user: {type: Schema.Types.ObjectId, ref: "User"},
  blog: {type: Schema.Types.ObjectId, ref: "Blog"},
});

module.exports = mongoose.model("Comment", CommentSchema);

