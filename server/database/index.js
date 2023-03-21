const mongoose = require('mongoose')

mongoose.connect(process.env.mongo_URI)
    .then(() => {`Database connectedL ${process.env.mongo_URI}`})
    .catch(err => {console.log(err)})