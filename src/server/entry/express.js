import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'


export default app => {
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())
  app.use(cors({exposedHeaders: ['Qutke-Auth']}))
  app.set('view engine', 'jade')
  const debug = process.env.NODE_ENV !== 'release' ? true : false
  app.config = {
    debug: debug,
    base: debug ? 'http://localhost:3001/' : '/'
  }
}