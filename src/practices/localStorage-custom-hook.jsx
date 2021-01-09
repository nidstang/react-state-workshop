import React from 'react';
import Storage from '../libs/storage';
import Counter from '../components/counter';

const vault = Storage({ name: 'counter' });

const initialState = vault.get();

const useCounterStorage = (initialState) => {
    const [count, setCount] = React.useState(initialState ? initialState.count : 0);

    React.useEffect(() => {
        vault.save({count})
    }, [count]); 

    return [count, setCount];
};

export default (props) => {
    const [count, setCount] = useCounterStorage(initialState);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);


    return (
        <>
            <Counter
                value={count}
                increment={increment}
                reset={reset}
                decrement={decrement}
            />
            <p>Local Storage custom hook practica</p>
        </>
    );
};