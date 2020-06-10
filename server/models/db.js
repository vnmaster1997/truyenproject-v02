// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, (err) => {
//     if (!err) { console.log('MongoDB connection succeeded.'); }
//     else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
// });

require('./user.model');

const mongoose = require('mongoose');
const config = require('../config/config.json');

// const MONGOURI = `mongodb://${config.dbURL}/${config.dbName}`;
const MONGOURI = config.development.MONGODB_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI, { useNewUrlParser: true });
        console.log("Connect Database Success!")
    } catch(e) {
        console.log(e);
        throw(e);
    }
}

module.exports = connectDB;