import React from 'react';

function Todo(props) {
    return (
        <div>
            <h3>{props.listItem.task}</h3>
        </div>
    );
}

export default Todo;