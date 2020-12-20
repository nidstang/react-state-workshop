import React from 'react';
import Counter from '../components/counter';
import Storage from '../libs/storage';

const vault = Storage({ name: 'counter' });

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment() {
        console.log('Before', this.state);
        this.setState(state => ({ count: state.count + 1 }));
    }

    decrement() {
        this.setState(state => ({ count: state.count - 1 }));
    }

    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <>
                <Counter
                    increment={this.increment.bind(this)}
                    reset={this.reset.bind(this)}
                    decrement={this.decrement.bind(this)}
                    value={this.state.count}
                />
                <p>Local Storage classes</p>
            </>
        )
    }
};