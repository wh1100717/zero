import {Schema} from 'mongoose'

export default new Schema({
  name: String,
  author: String,
  url: String,
  metric: String,
  link: String
}, {collection: 'demo'})
