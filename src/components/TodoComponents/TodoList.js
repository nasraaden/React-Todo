import React from "react";

const TodoList = props => {

    const toggle = e => {
        props.toggleComplete(props.item.id)
    }
    return(
        <div>
            <p key={props.item.id} onClick={toggle}>{props.item.task}</p>
        </div>
    )
}

export default TodoList;