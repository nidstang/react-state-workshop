import React from 'react';
import { toTodo } from './Todo';

const Todos = ({ todos = [], onToggle }) => (
    <div>
        <h1>Your TODO list ({ todos.length })</h1>
        { todos.map(toTodo(onToggle))}
    </div>
);

export default Todos;
