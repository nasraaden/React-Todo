import React from 'react';
import Todo from "./components/TodoComponents/Todo"
import TodoForm from "./components/TodoComponents/TodoForm"

const todo = [
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: todo
    }
  }

  addItem = input => {
    const newItem = {
      task: input,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <TodoForm />
        <Todo todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
