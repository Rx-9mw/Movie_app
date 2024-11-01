require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
const db = mongoose.connection;
db.on(err, (err) => {
     console.log(`ERROR: ${err}`);
})
db.once('open', () => {
     console.log('Connected to the databse!');
})

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
     console.log(`Example app listening on port ${process.env.APP_PORT}!`)
});