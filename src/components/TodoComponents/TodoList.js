import React from 'react';

import Todo from './Todo';

function TodoList(props) {
    return (
    props.todoList.map(ListItemFromMap => (
        <Todo key={ListItemFromMap.id} listItem={ListItemFromMap} />
    )));
}

export default TodoList;