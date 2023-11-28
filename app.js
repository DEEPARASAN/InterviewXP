// require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/InterviewDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Import routes
const indexRoutes = require('./routes/index');
const postRoutes = require('./routes/posts');
const composeRoutes = require('./routes/compose');
const tableViewRoutes = require('./routes/tableview');


// Use routes
app.use('/', indexRoutes);
app.use('/posts', postRoutes);
app.use('/compose', composeRoutes);
app.use('/tableview', tableViewRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App started at the port ${PORT}`);
});
