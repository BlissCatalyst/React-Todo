import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
  {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
  },
  {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
  }
];

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

  addTask = e => {
    e.preventDefault();
    // setState with new task at the end of the array
    const newTask = {
      task: this.state.task,
      id: {},
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask],
      task: "",
      id: {},
      completed: false,
      addTask: ""
    })
  };

  handleChanges = e => {
    this.setState({
      [e.target.task]: e.target.value
    });
  };

  render() {
    return (
      <div className="todo-container">
        <h2>Todo List MVP</h2>
        <section>
          <TodoList todoList={todoList} />
        </section>
        <section>
          <TodoForm 
          addTask={this.state.addTask}
          handleChanges={this.handleChanges}
          task={this.state.task}
          id={Date.now()}
          completed={false}
          />
        </section>
      </div>
    );
  }
}

export default App;