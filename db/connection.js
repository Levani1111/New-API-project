const mongoose = require('mongoose')

//const mongoURL = "mongodb://localhost/apiproject";
let mongoURI = '';

//mongoose.Promise = Promise

if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/8080";
}

mongoose.connect(mongoURI, {
        useNewUrlParser : true,
        useFindAndModify: false })
  //      .then( feedback => console.log('connected') )
  //      .catch( err => console.log('connection failed', err))

module.exports = mongoose;