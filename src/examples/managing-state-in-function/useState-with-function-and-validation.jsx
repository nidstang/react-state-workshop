import React from 'react';
import Counter from '../../components/counter';

const dec = props => count => {
    if (count <= props.min) return; // no funciona (para que funcine return count;)
    return count - 1;
};

//const CounterLogic = (props) => ({
//    decrement: dec(props)
//});

// { max: Int, min: Int }
export default (props) => {
    //const logic = CounterLogic(props); // withCounterLogic? (dependencia implicita)

    const [count, setCount] = React.useState(0);

    const increment = () => setCount(c => {
        // if (c >= props.max) return; // no funciona (para que funcione: return c;)
        if (c >= props.max) return c;
        return c + 1;
    });
    const decrement = () => setCount(dec(props));
    //const decrementv2 = () => setCount(logic.decrement);
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