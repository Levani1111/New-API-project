const express = require('express');

const app = express();

const mongoose = require('mongoose')

// middlewares
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)
// Create Routes

app.get('/', (req, res) =>{
    res.send('We are on home')
});


// connect to database
mongoose.connect('')

// connect to the server
app.listen(3000);
