const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
     name:{
          type: String,
          required: true
     },
     genre:{
          type: String,
          required: false
     },
     rating:{
          type: Number,
          required: true
     },
     description:{
          type: String,
          required: false
     }
})

module.exports = mongoose.model('Subscriber', movieSchema);