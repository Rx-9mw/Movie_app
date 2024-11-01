const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
     name:{
          type: String,
          required: true
     },
     genre:{
          type: String,
          required: false
     },
     rating:{
          type: int,
          required: true
     },
     description:{
          type: String,
          required: false
     }
})

module.exports = mongoose.model('Subscriber', subscriberSchema);