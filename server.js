require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./Routes/routing.js');
const express = require('express');
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err) => {
     console.log(`ERROR: ${err}`);
})
db.once('open', () => {
     console.log('Connected to the databse!');
})
app.use(cors());

app.use(express.json());

app.use('/movies', routes);

app.listen(process.env.APP_PORT, () => {
     console.log(`Example app listening on port ${process.env.APP_PORT}!`)
});