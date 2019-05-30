import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, toggleTodo, deleteTodo } from '../redux-elements/actions/todoActions'
import TodoHandler from '../handlers/todoHandler'

class TodoList extends Component {
  componentDidMount() {
    TodoHandler.fetchTodos((todos) => {
      this.props.dispatch(fetchTodos(todos))
    })
  }

  toggleTodo = async (e) => {
    const _id = e.target.id
    //add opacity for title   
    const isCompleted = parseInt(e.target.className)
    // config in server, client
    TodoHandler.toggleTodo(_id, isCompleted, () => {
      this.props.dispatch(toggleTodo(_id))
    })
    let ui = document.getElementById(_id)
    ui.style.transition = 'opacity 0.5s'
    if (isCompleted) {
      ui.style.opacity = '1'
    } else {
      ui.style.opacity = '0.5'
    }

  }

  deleteTodo = (e) => {
    const _id = e.target.id
    TodoHandler.deleteTodo(_id, () => {
      this.props.dispatch(deleteTodo(_id))
    })
    let ui = document.getElementsByClassName(e.target.id)[0]
    ui.style.transition = 'opacity 0.5s'
    ui.style.opacity = '0.5'
  }

  render() {
    const { todos } = this.props
    return (
      <>
        {todos.map(todo => (
          <div className={`todo-card card card-body ${todo._id}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', opacity: (typeof todo.temp === "undefined") ? '1' : '0.5' }} key={todo._id}>
            <div className="sth card-title">
              <div>
                <div onClick={this.toggleTodo}
                  id={todo._id}
                  className={`${todo.isCompleted ? 1 : 0}`}
                  style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', opacity: todo.isCompleted ? '0.5' : '1' }}
                >{todo.title}</div>
              </div>

            </div>
            <div>
              <span style={{ fontSize: '34px', position: 'absolute', marginTop: '-15px', marginLeft: '-15px' }}
                id={todo._id}
                onClick={this.deleteTodo}
              >×</span>
            </div>
          </div>
        ))}
      </>
    )
  }
}

const mapStateToProps = bigState => ({
  todos: bigState.todos
})

export default connect(mapStateToProps)(TodoList)
