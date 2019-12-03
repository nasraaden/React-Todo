import React from "react";
import TodoList from "./TodoList";

const Todo = props => {
    
    return (
        <div>
            {props.todo.map((item, index) => (
            <TodoList key={index} item={item} 
            toggleComplete={props.toggleComplete}/>
            ))}
            
        </div>
    )
}

export default Todo;