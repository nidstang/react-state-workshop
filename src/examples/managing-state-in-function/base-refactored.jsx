import React from 'react';
import Counter from '../../components/counter';

export default (props) => {

    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <Counter
            value={count}
            increment={increment}
            reset={reset}
            decrement={decrement}
        />
    );
};