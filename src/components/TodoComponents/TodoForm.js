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
    submitForm = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: "" });
    };
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input value={this.state.newItem} onChange={this.handleChanges} type="text" name="item" placeholder="To Do"/>
                <button>Add</button>
                
            </form>
        )
    }
}

export default TodoForm;