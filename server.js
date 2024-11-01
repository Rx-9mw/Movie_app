require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000



app.listen(process.env.APP_PORT, () => {
     console.log(`Example app listening on port ${port}!`)
});