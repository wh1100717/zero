import _ from 'lodash'

class MongoBase {
  constructor (model) {
    this.model = model
  }
  _getCB (_args) {
    const args = [].slice.apply(_args)
    const cb = args.pop()
    if (!_.isFunction(cb)) {
      throw new Error("Callback Function should be specified as the last parameter.")
    }
    return cb
  }
  create (doc) {
    const cb = this._getCB(arguments)
    this.model.create(doc, (err, data) => cb(err, data))
  }
  getById (id) {
    const cb = this._getCB(arguments)
    this.model.create(doc, (err, data) => cb(err, data))    
  }
  countByQuery (query) {
    const cb = this._getCB(arguments)
    this.model.count(query, (err, data) => cb(err, data))
  }
  getByQuery (query) {
    const cb = this._getCB(arguments)
    this.model.find(query, (err, data) => cb(err, data))
  }
  getAll () {
    const cb = this._getCB(arguments)
    this.model.find({}, (err, data) => cb(err, data))
  }
  delete (query) {
    const cb = this._getCB(arguments)
    this.model.remove(query, (err) => cb(err))
  }
  update (conditions, update, options) {
    const cb = this._getCB(arguments)
    this.model.update(conditions, update, options, (err) => cb(err))
  }
}

export default MongoBase