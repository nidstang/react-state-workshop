import React from 'react';

import Todos from '../components/Todos';
import CreateTodo from '../components/CreateTodo';
import ToggleAllComponent from '../components/ToggleAll';
import ids from '../libs/id';
import initialState from '../fixtures/todos';
import { StateContext } from './context';
import '../styles/todosApp.css';

const ToggleTodo = id => ({
    type: 'TOGGLE_TODO',
    payload: id,
});

const AddTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
});

const updateTodosToggle = (todo, { payload } = {}) => todo.map(todo => {
    if (todo.id === payload) {
        return { ...todo, toggled: !todo.toggled }
    }

    return todo;
});


// action = { type: ADD_TODO, payload: todo }
const reducer = (todos = initialState(), action = {}) => {
    switch(action.type)  {
        case AddTodo().type:
            return [Object.assign({}, { ...action.payload }, { id: ids.next().value, toggled: false }), ...todos]
        case ToggleTodo().type:
            return updateTodosToggle(todos, action)
        default:
            return todos;
    }
};

export default () => {
    const [todos, dispatch] = React.useReducer(reducer, reducer());

    const addTodo = React.useCallback(todo => {
        dispatch(AddTodo(todo));
    }, [dispatch]);

    const toggleTodo = React.useCallback(id => {
        dispatch(ToggleTodo(id));
    }, [dispatch]);

    return (
        <div class="container-todo">
            <StateContext.Provider value={[todos, dispatch]}>
                <CreateTodo onSubmit={addTodo} />
                <ToggleAllComponent notToggled={0} onClick={() => null} />
                <Todos todos={todos} onToggle={toggleTodo} />
            </StateContext.Provider>
        </div>
    )
}