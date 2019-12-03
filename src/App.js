import React from 'react';
import Todo from "./components/TodoComponents/Todo"
import TodoForm from "./components/TodoComponents/TodoForm"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: []
    }
  }

  addItem = newItemText => {
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  }

  toggleComplete = itemId => {
    const todo = this.state.todo.map(todos => {
      if (todos.id === itemId) {
        todos.completed = !todos.completed
      }
      return todos
    });
    this.setState({todo, todos: ''})
  }

  removeItem = () => {
    this.setState(previousState => {
      return {
        todo: previousState.todo.filter(todos => {
          return !todos.completed;
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Nasra's Todo List</h1>
        <TodoForm 
        addItem={this.addItem}
        removeItem={this.removeItem}
        />
        <Todo 
        todo={this.state.todo}
        toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
