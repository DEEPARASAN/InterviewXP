const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get("/", (req, res) => {
  res.render("compose.ejs");
  //console.log("Entered Compose")
});

router.post("/", async (req, res) => {
  console.log("Composed")
  const userData = {
    postTitle: req.body.postTitle,
    companyType : req.body.companyType,
    roleOffered : req.body.jobRole,
    totalRounds : req.body.rounds,
    batch : req.body.batch,
    dateGiven: req.body.dateGiven,
    difficultyLevel : req.body.difficulty,
    postBody: req.body.postBody,
    verdict:req.body.verdict
  };

  console.log(userData)

  try {
    const post = new Post(userData);
    await post.save();
    console.log("saved")
    res.redirect('/posts');
  } catch (err) {
    console.error('Error saving post:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
