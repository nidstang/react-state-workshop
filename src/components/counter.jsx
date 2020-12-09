import React from 'react';

export default ({
    value = 0,
    increment = () => null,
    decrement = () => null,
    reset = () => null,
}) => (
    <div>
        <span>{value}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Increment</button>
        <button onClick={reset}>Increment</button>
    </div>
);