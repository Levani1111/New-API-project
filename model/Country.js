const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const CountrySchema = new Schema({
  name: String,
  capital: String,
  population: Number,
  currencies: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: "Currency"
    }
  ],
  languages: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: "Language"
    }
  ],
  area: String,
  flag: String
});

const Country = mongoose.model('Country', CountrySchema);
module.exports = Country