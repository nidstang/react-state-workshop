import React from 'react';
import { toTodo } from './Todo';

const Todos = ({ todos = [], onToggle }) => (
    <section class="todos-list">
        <h1>Your TODO list ({ todos.length })</h1>
        { todos.map(toTodo(onToggle))}
    </section>
);

export default Todos;
