import React from 'react';
import Counter from '../../components/counter';

export default (props) => {

    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    React.useEffect(() => {
        document.title = `Your counter value is ${count}`;
    }); // esto no es habitualmente lo que vas a querer hacer

    return (
        <Counter
            value={count}
            increment={increment}
            reset={reset}
            decrement={decrement}
        />
    );
};