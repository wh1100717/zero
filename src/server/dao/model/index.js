import mongoose from 'mongoose'
import config from '../../entry/config'
import demoMapping from './mapping/demo'

const mongoConfig = config.mongo

mongoose.connect(mongoConfig.url)

const db = mongoose.connection

db.on('error', err => {
  console.error('connect to %s error: ', mongoConfig.url, err.message)
  // process.exit(1)
})

db.on('open', () => {
  console.log('%s has been connected.', mongoConfig.url)  
})

export const demoModel = mongoose.model('demo', demoMapping)