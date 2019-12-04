import React from "react";

const TodoList = props => {

    const toggle = e => {
        props.toggleComplete(props.item.id)
    }
    return(
        <div className="task-card">
            <div className={`item${props.item.completed ? " completed" : ""}`} key={props.item.id} onClick={toggle}>
                <p>{props.item.task}</p>
                
            </div>
        </div>
    )
}

export default TodoList;