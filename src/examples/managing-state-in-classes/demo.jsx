import React from 'react';
import Counter from '../../components/counter';

// const inc = (state, { max }) => {
//     if (state.count >= max) return;
//     return { count: state.count + 1 };
// };

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state);
        });
    }

    decrement() {
        this.setState(state => ({ count: state.count - 1 }));
    }

    reset() {
        this.setState(state => ({ count: 0 }));
    }

    render() {
        return <Counter 
            value={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
            reset={this.reset}
        />;
    }
};