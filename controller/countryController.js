const Country = require ('../model/Country')

module.exports = {
    index: (req, res) => {
        Country.find({}).then((country) =>{
            res.json(country)
        })
    }
}