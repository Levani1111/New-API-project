const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const countryRoutes = require('./routes/countryRoutes');
const Country = require('./model/Country')

app.use(bodyParser.json())
app.use(cors())
app.use('/' countryRoutes)

// Create a new country

countryRoutes.route('/create').post(function (req, res) {
  const country = new Country(req.body);
  country.save()
    .then(place => {
      res.json(place);
    })
    .catch(err => {
      res.status(400).send("failed");
    });
});


// connect to the server
app.listen(3000);
