const env = process.env.NODE_ENV || 'dev'

let config = {}

config.dev = {
  web: {
    host: 'localhost',
    port: '3000',
    base_url: ''
  },
  myslq: {
    host: 'your.mysql.host',
    port: 'your.mysql.port',
    user: 'your.mysql.username',
    password: 'your.mysql.password',
    database: 'your.mysql.dbName',
    charset: 'utf8'
  },
  mongo: {
    url: 'your.mongo.url',
    db: 'your.mongo.db',
    collection: 'your.mongo.collection'
  }
}

config.release = {
  web: {
    host: 'localhost',
    port: '8080',
    base_url: ''
  },
  myslq: {
    host: 'your.mysql.host',
    port: 'your.mysql.port',
    user: 'your.mysql.username',
    password: 'your.mysql.password',
    database: 'your.mysql.dbName',
    charset: 'utf8'
  },
  mongo: {
    url: 'your.mongo.url',
    db: 'your.mongo.db',
    collection: 'your.mongo.collection'
  }
}

export default config[env]