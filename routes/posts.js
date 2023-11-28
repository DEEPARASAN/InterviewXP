const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');

// Correct the path to the post model
const Post = require('../models/post');

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.render("main", { posts: posts });
  } catch (err) {
    console.error('Error fetching posts:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get("/:postsBrief", async (req, res) => {
  const reqTitle = _.lowerCase(req.params.postsBrief);

  try {
    // const post = await Post.findOne({ postTitle: reqTitle, postBody});
    // res.render("post", {
    //   post: {
    //     storedTitle: reqTitle,
    //     storedDetails: post.postBody
    //   }
    // });
    
    const post = Post.findOne(function(err, post){
      res.render("post", { 
        post:
        {
          storedTitle : reqTitle,
          storedDetails : post.postBody
        }
      })})

  } catch (err) {
    console.error('Error fetching post:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
