import mongoose from 'mongoose'
import demoSchema from '../schema/demo'

export default mongoose.model('demo', demoSchema)