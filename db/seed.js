const mongoose = require('.connection');
const data = require('./countries.json');
const Country = require('../model/Country');

Country.deleteMany({}).then(() => {
    Country
        .create(data).then((returnData) => {
            console.log(returnData)
            process.exit()
        })
        .catch((err) => {
            console.log("our seeding didn't work")
        })
})