import React from 'react';

const Todo = ({ info, onToggle }) => {
    return (
        <div>
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            <div>
                <label>
                    <input type="checkbox" checked={info.toggled} onChange={() => onToggle(info.id)} />
                    Toggle
                </label>
            </div>
        </div>
    );
};

const toTodo = onToggle => todo => (
    <Todo onToggle={onToggle} key={todo.id} info={todo} />
);

export default Todo;
export { toTodo };