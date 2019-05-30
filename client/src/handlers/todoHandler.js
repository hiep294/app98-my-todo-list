class TodoHandler {
  /**
   * 
   * consider as fetch all
   */
  static fetchTodos(handleClient) {
    fetch('./api/todos', {

    })
      .then(res => res.json())
      .then(data => handleClient(data.todos))
      .catch(errs => console.log(errs))
  }
  /**
   * 
   * consider as fetch all
   */
  static fetchTodosActive(handleClient) {
    fetch('./api/todos/active', {

    })
      .then(res => res.json())
      .then(data => handleClient(data.todos))
      .catch(errs => console.log(errs))
  }

  /**
   * 
   * consider as fetch all
   */
  static fetchTodosCompleted(handleClient) {
    fetch('./api/todos/completed', {

    })
      .then(res => res.json())
      .then(data => handleClient(data.todos))
      .catch(errs => console.log(errs))
  }

  static addTodo(todo, handleClient) {
    fetch('./api/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => handleClient(data.todo))
      .catch(errs => console.log(errs))
  }

  static deleteTodo(_id, handleClient) {
    fetch(`./api/todos/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) handleClient()
      })
      .catch(errs => console.log(errs))
  }

  static toggleTodo(_id, isCompleted, handleClient) {
    fetch(`./api/todos/${_id}`, {
      method: 'PUT',
      body: JSON.stringify({ isCompleted }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) handleClient()
      })
      .catch(errs => console.log(errs))
  }
}

export default TodoHandler