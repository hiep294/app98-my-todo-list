import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO_ID, FETCH_TODOS_ACTIVE, FETCH_TODOS_COMPLETED } from '../actions/type'

const fetchTodos = (todos) => ({
  type: FETCH_TODOS,
  payload: todos
})

export const fetchTodosActive = (todos) => ({
  type: FETCH_TODOS_ACTIVE,
  payload: todos
})

export const fetchTodosCompleted = (todos) => ({
  type: FETCH_TODOS_COMPLETED,
  payload: todos
})

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

const toggleTodo = (_id) => ({
  type: TOGGLE_TODO,
  payload: _id
})

const deleteTodo = (_id) => ({
  type: DELETE_TODO,
  payload: _id
})

const updateTodoId = (tempId, newTodo) => ({
  type: UPDATE_TODO_ID,
  payload: {
    tempId: tempId,
    newTodo: newTodo
  }
})

export { fetchTodos, addTodo, toggleTodo, deleteTodo, updateTodoId } 