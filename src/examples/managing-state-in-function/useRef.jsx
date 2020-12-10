import React from 'react';

export default (props) => {

    const [count, setCount] = React.useState(0);
    const lastCount = React.useRef(); // { current: null }

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    console.log('Current render', count);
    console.log('Last render', lastCount.current);

    lastCount.current = count;

    return (
        <Counter
            value={count}
            increment={increment}
            reset={reset}
            decrement={decrement}
        />
    );
};