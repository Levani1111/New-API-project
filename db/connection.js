const mongoose = require('mongoose')

//const mongoURL = "mongodb://localhost/8080";
let mongoURI = '';

//mongoose.Promise = Promise

if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost:8080/";
}

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));

module.exports = mongoose;