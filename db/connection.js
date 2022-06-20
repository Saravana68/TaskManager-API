const mongoose = require('mongoose');


const connectDB = (CONNECTION_STRING) => {
        return mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
}

module.exports = connectDB;