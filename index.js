const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const userRouter = require('./routes/user-routes');
const eventRouter = require('./routes/event-routes');

const corspolicy = { origin: process.env.FRONTEND_URL }
const uri = process.env.DBURI
const db = module.exports = () => {
    try {
        mongoose.connect(uri, {
            user: process.env.DBUSERNAME,
            pass: process.env.DBPASSWORD,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (err) {
        console.log(err)
    }
}

db();

app.use(cors(corspolicy));
app.use(express.json());

app.use('/', (req, res, next) => {
    console.log('a new request received');
    next();
})

app.use('/users', userRouter);
app.use('/events', eventRouter);

app.listen(process.env.PORT, () => {
    console.log('app listening at localhost')
})

