import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoHandler from './handlers/todoHandler'
import { connect } from 'react-redux'
import { FETCH_TODOS, FETCH_TODOS_ACTIVE, FETCH_TODOS_COMPLETED } from './redux-elements/actions/type'
import { fetchTodos, fetchTodosActive, fetchTodosCompleted } from './redux-elements/actions/todoActions'

class App extends React.Component {

  fetchTodos = () => {
    this.props.dispatch(fetchTodos([]))
    TodoHandler.fetchTodos((todos) => {
      this.props.dispatch(fetchTodos(todos))
    })
  }

  fetchTodosActive = () => {
    this.props.dispatch(fetchTodosActive([]))
    TodoHandler.fetchTodosActive((todos) => {
      this.props.dispatch(fetchTodosActive(todos))
    })
  }

  fetchTodosCompleted = () => {
    this.props.dispatch(fetchTodosCompleted([]))
    TodoHandler.fetchTodosCompleted((todos) => {
      this.props.dispatch(fetchTodosCompleted(todos))
    })
  }

  render() {
    const { filter } = this.props
    const clearStyle = {
      opacity: '0.5',
      cursor: 'default'
    }
    return (
      <div className="App">
        <div className="container">
          <h2 className="todos-title">Todos Module</h2>
          <div className="filter">
            <button type="button" value="all" className="m-1 btn btn-secondary" onClick={this.fetchTodos}
              style={filter === FETCH_TODOS ? clearStyle : null}
            >All todos</button>

            <button className="m-1 btn btn-secondary" value="active"
              onClick={this.fetchTodosActive}
              style={filter === FETCH_TODOS_ACTIVE ? clearStyle : null}
            >Active</button>

            <button className="m-1 btn btn-secondary" value="completed"
              onClick={this.fetchTodosCompleted}
              style={filter === FETCH_TODOS_COMPLETED ? clearStyle : null}
            >Completed</button>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <div className="todos-container">
                <TodoList />
              </div>
            </div>
            <div className="col">
              <TodoForm />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = bigState => ({
  filter: bigState.filter
})

export default connect(mapStateToProps)(App)

