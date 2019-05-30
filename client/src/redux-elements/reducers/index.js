import todoReducer from './todoReducer'
import filterReducer from './filterReducer'

const rootReducer = (bigState = {}, action) => ({
  todos: todoReducer(bigState.todos, action, bigState.filter),
  filter: filterReducer(bigState.filter, action)
})

export default rootReducer