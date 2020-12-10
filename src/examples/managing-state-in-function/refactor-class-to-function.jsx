import React from 'react';
import Counter from '../../components/counter';

const decrement = (state, { min }) => {
    if (count <= min) return;
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
            if (count >= props.max) return;
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

export default (props) => {

    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1); // antes seteabamos un objeto. Ahora solo el valor
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

const another = (props) => {
    // const initialState = { count: 0, message: 'OpenWebinars' }; Ejemplo de como perdemos message al hacer setState con count
    const initialState = { count: 0 };

    const [state, setState] = React.useState(initialState);

    const increment = () => setState({ count: state.count + 1 }); // No se hace un objcet assign
    const decrement = () => setState({ count: state.count - 1 });
    const reset = () => setState(initialState);

    return (
        <Counter
            value={state.count}
            increment={increment}
            reset={reset}
            decrement={decrement}
        />
    );
};