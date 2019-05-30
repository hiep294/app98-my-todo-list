import React from 'react'
import { connect } from 'react-redux'
import { addTodo, updateTodoId } from '../redux-elements/actions/todoActions'
import TodoHandler from '../handlers/todoHandler'
import uuid from 'uuid'

class TodoForm extends React.Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const tempId = uuid()
    this.props.dispatch(addTodo({
      _id: tempId,
      title: this.state.title,
      temp: true
    }))

    this.setState({
      title: ''
    })

    TodoHandler.addTodo({
      title: this.state.title
    }, (newTodo) => {
      this.props.dispatch(updateTodoId(tempId, newTodo))
    })
  }


  render() {
    return (
      <div className="todo-form">
        <h2>Create new todo item</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input name="title" id="todoTitle"
              placeholder="Title" type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <button className="submit-button btn btn-secondary">Submit new todo
            item</button>
        </form>
      </div>
    )
  }
}


export default connect()(TodoForm)
