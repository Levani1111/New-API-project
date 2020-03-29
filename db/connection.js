const mongoose = require("mongoose");

mongoose.Promise = Promise;


let mongoURI = "";


if (process.env.NODE_ENV === "production") {
        mongoURI = string(process.env.DB_URL);
} else {
    mongoURI = "mongodb://localhost/New-API-project";
}


mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;
