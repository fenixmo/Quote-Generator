var mongoose = require('mongoose')
var Schema = mongoose.Schema

var schema = new Schema({
  _id: Schema.Types.ObjectId
  quote: String,
  author: String
})

var Quote = mongoose.model('quotes', schema)

module.Exports = Quote
