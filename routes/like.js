const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/like/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Increment the likes count
    post.likesCount += 1;

    // Save the updated post
    await post.save();

    res.json({ likesCount: post.likesCount });
  } catch (error) {
    console.error('Error liking post:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
