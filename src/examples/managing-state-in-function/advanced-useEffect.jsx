import React from 'react';

export default (props) => {

    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    React.useEffect(() => {
        document.title = `Your counter value is ${count}`;
    }, []); // lo mismo que componentDidMount

    React.useEffect(() => {
        document.title = `Your counter value is ${count}`;
    }, [count]) // ejecuta el effect cuando count cambie;

    // React.useEffect(() => {
    //     document.title = `Your counter value is ${count}`;
    //     setCount(count + 1);
    // }, [count]) // bucle

    return (
        <Counter
            value={count}
            increment={increment}
            reset={reset}
            decrement={decrement}
        />
    );
};