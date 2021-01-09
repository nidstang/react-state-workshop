import React from 'react';
import Counter from '../components/counter';
import Storage from '../libs/storage';

const vault = Storage({ name: 'counter' });

const initialState = vault.get();

export default (props) => {

    const [count, setCount] = React.useState(initialState ? initialState.count : 0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    React.useEffect(() => {
        vault.save({ count });
    }, [count]);

    return (
        <>
            <Counter
                value={count}
                increment={increment}
                reset={reset}
                decrement={decrement}
            />
            <p>Local Storage hook effect practica</p>
        </>
    );
};