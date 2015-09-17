import _ from 'lodash'
import mysql from 'mysql'
import config from '../entry/config'

const mysqlConfig = config.mysql

const pool = mysql.createPool(mysqlConfig)

export function query () {
  const args = [].slice.apply(arguments)
  const cb = args.pop()
  if (!_.isFunction(cb)) {
    throw new Error("Callback Function should be specified as the last parameter.")
  }
  pool.getConnection((err, connection) => {
    if (err) {
      return cb(err)
    }
    args.push((err, rows) => {
      connection.release()
      cb(err, rows)
    })
    connection.query.apply(connection, args)
  })
}