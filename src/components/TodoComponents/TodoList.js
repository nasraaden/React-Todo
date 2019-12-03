import React from "react";

const TodoList = props => {

        return(
            <div>
                <p>{props.item.task}</p>
            </div>
        )
    
}

export default TodoList;