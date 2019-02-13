import React from 'react';

const TodoForm = props => {
    return (
    <form onSubmit={props.addTask}>
        <input 
        type="text"
        value={props.task}
        onChange={props.handleChanges}
        placeholder="new task"
        />
        <button type="submit">Add Todo</button>
    </form>
    );
}

export default TodoForm;