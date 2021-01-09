import React from 'react';

import Todos from '../components/Todos';
import CreateTodo from '../components/CreateTodo';
import ToggleAllComponent from '../components/ToggleAll';
import ids from '../libs/id';
import initialState from '../fixtures/todos';
import '../styles/todosApp.css';
import { StateContext } from './context';

const ToggleAll = () => ({
    type: 'TOGGLE_ALL',
});

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

const viewTodosLength = todos => todos.filter(todo => !todo.toggled).length;


// action = { type: ADD_TODO, payload: todo }
const reducer = (todos = initialState(), action = {}) => {
    switch(action.type)  {
        case AddTodo().type:
            return [Object.assign({}, { ...action.payload }, { id: ids.next().value, toggled: false }), ...todos]
        case ToggleTodo().type:
            return updateTodosToggle(todos, action)
        case ToggleAll().type:
            return todos.map(todo => ({ ...todo, toggled: true }));
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

    const toggleAll = React.useCallback(() => {
        dispatch(ToggleAll());
    }, [dispatch]);

    return (
        <div class="container">
            <StateContext.Provider value={[todos, dispatch]}>
                <CreateTodo onSubmit={addTodo} />
                <ToggleAllComponent notToggled={viewTodosLength(todos)} onClick={toggleAll} />
                <Todos todos={todos} onToggle={toggleTodo} />
            </StateContext.Provider>
        </div>
    )
}