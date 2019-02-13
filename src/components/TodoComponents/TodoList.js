import React from 'react';

import Todo from './Todo';

function TodoList(props) {
    props.todoList.map(ListItemFromMap => (
        <Todo key={ListItemFromMap.id} listItem={ListItemFromMap} />
    ))
}

export default TodoList;