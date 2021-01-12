import React from 'react';

export default ({
    value = 0,
    increment = () => null,
    decrement = () => null,
    reset = () => null,
}) => (
    <div class="container-counter">
        <section class="counter">
            <span>{value}</span>
        </section>
        <section class="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Descrement</button>
            <button onClick={reset}>Reset</button>
        </section>
    </div>
);