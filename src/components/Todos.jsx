import React from 'react';
import { toTodo } from './Todo';

const viewTodosLength = state => state.length;

const Todos = ({ todos = [], onToggle }) => (
    <section class="todos-list">
        <h1>Your TODO list {viewTodosLength(todos)}</h1>
        { todos.map(toTodo(onToggle))}
    </section>
);

export default Todos;
