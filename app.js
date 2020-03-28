const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const countryRoutes = require ('./routes');

const mongoose = require('mongoose')


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
