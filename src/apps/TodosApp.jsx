import React, { useState } from 'react';

import Todos from '../components/Todos';
import CreateTodo from '../components/CreateTodo';
import ids from '../libs/id';
import initialState from '../fixtures/todos';
import '../styles/todosApp.css';

export default () => {
    const [todos, setTodos] = useState(initialState());

    const addTodo = todo => {
        Object.assign(todo, {
            id: ids.next().value,
            toggled: false,
        });

        setTodos([todo, ...todos]);
    };

    const toggleTodo = id => {
        const newTodos = todos.map(todo => {
            switch(todo.id) {
                case id:
                    return { ...todo, toggled: !todo.toggled};
                default:
                    return todo;
            }
        });

        setTodos(newTodos);
    };

    return (
        <div class="container">
            <CreateTodo onSubmit={addTodo} />
            <Todos todos={todos} onToggle={toggleTodo} />
        </div>
    )
}