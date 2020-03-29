const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const countryRoutes = require('./routes/countryRoutes');
const Country = require('./model/Country')

app.use(bodyParser.json())
app.use(cors())
app.use('/', countryRoutes)

// Create a new country

app.route('/create').post(function (req, res) {
  const country = new Country(req.body);
  country.save()
    .then(place => {
      res.json(place);
    })
    .catch(err => {
      res.status(400).send("failed");
    });
});


app.get("/", (req, res) => {
  Country.find({}).then(place => {
    res.json(place);
  });
});


app.get('/name/:name', (req, res) => {
  Country.find({ name: req.params.name }).then(place => {
    res.json(place);
  });
});

app.get('/capital/:capital', (req, res) => {
    Country.find({ capital: req.params.capital}).then(place => {
        res.json(place);
    });
});

app.get("/_id/:_id", (req, res) => {
  Country.find({ _id: req.params._id }).then(place => {
    res.json(place);
  });
});

//app.get("/")


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});