const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const countryRoutes = require ('./routes/countryRoutes');




const postsRoute = require('./routes/countryRoutes');


// Create Routes

app.get('/', (req, res) =>{
    res.send('We are on home')
});


// connect to the server
app.listen(3000);
