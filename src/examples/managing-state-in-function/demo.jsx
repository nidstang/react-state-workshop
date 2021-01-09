import { inc } from 'ramda';
import React from 'react';
import Counter from '../../components/counter';
// import * as R from 'ramda';

const decrement = (state, { min }) => {
    if (state.count <= min) return;
    return { count: state.count - 1};
};

// props = { max: Int, min: Int }
const old = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment() {
        this.setState((state, props) => {
            if (state.count >= props.max) return;
            return { count: state.count + 1 };
        });
    }

    decrement() {
        this.setState(decrement);
    }

    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return <Counter
            increment={this.increment.bind(this)}
            reset={this.reset.bind(this)}
            decrement={this.decrement.bind(this)}
            value={this.state.count}
        />;
    }
};

// const inc = props => c => {
//     if (c >= props.max) return c;
//     return c + 1;
// };

// const CounterLogic = props => ({
//     increment: inc(props),
// });

const useCounter = ([value, setValue]) => {
    const increment = () => setValue(c => c + 1);
    const decrement = () => setValue(c => c - 1);
    const reset = () => setValue(() => 0);

    return [value, increment, decrement, reset];
};

const useWeightCounter = ([value, increment, decrement, reset]) => {
    return {
        WeightCounter: () => {
            return <>
                <p>Your weight</p>
                <Counter value={value} increment={increment} decrement={decrement} reset={reset} />
            </>
        }
    }

};

// export default (props) => {
//     // const [count, increment, decrement, reset] = R.compose(useCounter, React.useState)(0);
//     const { WeightCounter } = R.compose(useWeightCounter, useCounter, React.useState)(0);

//     // React.useEffect(() => {
//     //     console.log('Running this effect');
//     //     document.title = `Your counter is ${count}`;
//     // }, [count]);


//     return (
//         <WeightCounter />
//         // <Counter value={count} increment={increment} decrement={decrement} reset={reset} />
//     )
// };








const initialState = () => ({
    count: 0,
})

const reducer = (state = initialState(), action = {}) => {
    if (action.type === 'INCREMENT') {
        return { count: state.count + 1 };
    }
    return state;
};


export default (props) => {
    const [state, dispatch] = React.useReducer(reducer, reducer())

    const increment = () => dispatch({ type: 'INCREMENT' });

    return (
        <Counter
            value={state.count}
            increment={increment}
        />
    );
};

