import mongoose from 'mongoose'
import mongoConfig from './config'

mongoose.connect(mongoConfig.url, { useNewUrlParser: true }, err => {
  if (err) {
    
  }
})

// console.log(mongoose.model('user').find())
