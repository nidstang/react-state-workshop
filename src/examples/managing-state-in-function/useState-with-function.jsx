import React from 'react';
import Counter from '../../components/counter';

const dec = count => count - 1;

export default (props) => {

    const [count, setCount] = React.useState(0);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(dec);
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