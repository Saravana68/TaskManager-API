
// My code contribution  console.log('saravana kumar'); 16.06.2022
const express = require('express');
const connectDB = require('./db/connection');
const app = express();

const route = require('./routes/task');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const port = process.env.PORT || 5000;

require('dotenv').config();

/* Middleware */
app.use(express.static('./public'));
app.use(express.json());

/* Middle ware for Route & Errors */
app.use('/api/v1/tasks', route);
app.use(notFound);
app.use(errorHandler);

const getStarted = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(5000, (req, res) => { 
        console.log(`server listening at port ${port}`);
        });
    }
    catch (err) {
        console.log(err);
    }
}

getStarted();