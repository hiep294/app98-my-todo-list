import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO_ID, FETCH_TODOS_ACTIVE, FETCH_TODOS_COMPLETED } from '../actions/type'

const initialState = [
]

const todoReducer = (todos = initialState, action, filter) => {
  switch (action.type) {
    case FETCH_TODOS:
    case FETCH_TODOS_ACTIVE:
    case FETCH_TODOS_COMPLETED:
      return action.payload
    case ADD_TODO:
      if (filter === FETCH_TODOS_COMPLETED) {
        return todos
      }
      return [action.payload, ...todos]
    case TOGGLE_TODO:
      const newTodos = todos.map(todo => {
        if (todo._id === action.payload) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
      return newTodos
    case DELETE_TODO:
      return todos.filter(todo => todo._id !== action.payload)
    case UPDATE_TODO_ID:
      return todos.map(todo => {
        if (todo._id === action.payload.tempId) {
          todo = action.payload.newTodo
        }
        return todo
      })
    default:
      return todos
  }
}

export default todoReducer