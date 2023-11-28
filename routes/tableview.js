const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post')

router.get("/", async(req,res)=>
{
    const posts = await Post.find({})   
    res.render("tableview.ejs", {posts:posts})
})

module.exports = router;