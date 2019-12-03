import React from "react";
import "./Todo.css"

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: ""
        }
    }
    handleChanges = e => {
        this.setState({newItem: e.target.value})
    }
    

    addButton = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: "" });
    }

    clearButton= e => {
        e.preventDefault();
        this.props.removeItem(this.state.todo)
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input value={this.state.newItem} onChange={this.handleChanges} type="text" name="item" placeholder="Task..."/>
                <button onClick={this.addButton}>Add</button>
                <button onClick={this.clearButton}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;