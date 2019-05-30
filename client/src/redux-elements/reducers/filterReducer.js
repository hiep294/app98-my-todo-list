import { FETCH_TODOS, FETCH_TODOS_ACTIVE, FETCH_TODOS_COMPLETED } from '../actions/type'
export default function (filter = FETCH_TODOS, action) {
  switch (action.type) {
    case FETCH_TODOS_ACTIVE:
      return FETCH_TODOS_ACTIVE
    case FETCH_TODOS_COMPLETED:
      return FETCH_TODOS_COMPLETED
    case FETCH_TODOS:
      return FETCH_TODOS
    default:
      return filter
  }
}