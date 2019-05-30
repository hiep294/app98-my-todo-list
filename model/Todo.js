var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: String,
  isCompleted: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', todoSchema)