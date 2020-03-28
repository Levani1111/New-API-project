const express = require('express');

const app = express();

const mongoose = require('mongoose')

// middlewares


// Create Routes

app.get('/', (req, res) =>{
    res.send('We are on home')
});

app.get('/posts', (req, res) => {
  res.send("We are on posts");
});

// connect to database
mongoose.connect('')

// connect to the server
app.listen(3000);
