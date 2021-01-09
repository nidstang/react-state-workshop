// import initialState from '../../fixtures/todos';

const initialState = () => [
    {
        id: 1,
        title: 'Test',
        description: 'Test desc',
        toggled: false,
    },
    {
        id: 2,
        title: 'Test',
        description: 'Test desc',
        toggled: false,
    }

];

const AddTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
});

const ids = {
    next: () => ({
        value: 1,
    }),
};

const Todo = ({ title, description }) => ({
    id: ids.next().value,
    title,
    description,
    toggled: false,
});

const reducer = (todos = initialState(), action = {}) => {
    switch(action.type)  {
        case AddTodo().type:
            return [Todo(action.payload), ...todos];
        default:
            return todos;
    }
};

describe('Reducer tests', () => {
    test('Given no state and no action, reducer should return the initialstate', () => {
        const state = reducer()

        expect(state).toEqual(initialState());
    });

    test('Given no state and an AddTodo action, reducer should return state properly', () => {
        const todo = {
            title: 'This is a test',
            desription: 'Another desc',
        };
        const state = reducer(undefined, AddTodo(todo));

        expect(state[0].title).toBe('This is a test');
    });
})