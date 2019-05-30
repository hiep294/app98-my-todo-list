const route = require('express').Router()
const Todo = require('../../model/Todo')
/**
 * URL: /api/todos
 */
route.get('/', (req, res) => {
  Todo.find().sort({ date: -1 }).then(todos => res.send({ todos: todos }))
})

route.get('/active', (req, res) => {
  Todo.find({ isCompleted: false }).sort({ date: -1 }).then(todos => res.send({ todos: todos }))
})

route.get('/completed', (req, res) => {
  Todo.find({ isCompleted: true }).sort({ date: -1 }).then(todos => res.send({ todos: todos }))
})


route.post('/', (req, res) => {
  const todo = new Todo(req.body)
  todo.save().then(todo => res.send({ todo: todo }))
})

route.delete('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(errs => res.status(404).json({ success: false }))
})

route.put('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.updateOne({ isCompleted: !(req.body.isCompleted === 1) }).then(() => res.json({ success: true })))
    .catch(errs => res.status(404).json({ success: false }))
})

module.exports = route