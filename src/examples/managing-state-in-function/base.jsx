import React from 'react';
import Counter from '../../components/counter';

const decrement = (state, { min }) => {
    if (count <= min) return;
    return { count: state.count - 1};
};

// props = { max: Int, min: Int }
export default class extends React.Component {
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