// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');

// Set up the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set up the server
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

// Get comments
app.get('/comments', function (req, res) {
  fs.readFile(commentsPath, function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred on the server');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

// Post comments
app.post('/comments', function (req, res) {
  var newComment = req.body;
  fs.readFile(commentsPath, function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred on the server');
    } else {
      var comments = JSON.parse(data);
      comments.push(newComment);
      fs.writeFile(commentsPath, JSON.stringify(comments, null, 2), function (err) {
        if (err) {
          console.error(err);
          res.status(500).send('An error occurred on the server');
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(comments));
        }
      });
    }
  });
});


// Path: comments.js
// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/comments');
