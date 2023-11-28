const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postTitle: String,
  companyType : String,
  roleOffered : String,
  batch : Number,
  dateGiven: Date,
  difficultyLevel : String,
  verdict:String,
  postBody: String,
  rounds:Number,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;