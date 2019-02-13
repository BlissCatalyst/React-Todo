import React from 'react';

import todoList from './components/TodoComponents/Todo'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoList,
      task: "",
      completed: false
    };
  }

  addTodo = e => {
    e.preventDefault();
    // setState with new list item at the end of the array
    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      task: "",
      id: "",
      completed: false
    });
  };

  

  render() {
    return (
      <div className="todo-container">
        <h2>Todo List MVP</h2>
      </div>
    );
  }
}

export default App;
