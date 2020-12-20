import React from 'react';
import Counter from '../components/counter';
import Storage from '../libs/storage';

const vault = Storage({ name: 'counter' });

export default class extends React.Component {
    constructor(props) {
        super(props);
        const initialState = vault.get();

        this.state = initialState ? initialState : { count: 0 };
    }

    increment() {
        console.log('Before', this.state);
        this.setState(state => ({ count: state.count + 1 }), () => {
            vault.save(this.state);
        });
    }

    decrement() {
        this.setState(state => ({ count: state.count - 1 }), () => {
            vault.save(this.state);
        });
    }

    reset() {
        this.setState({ count: 0 }, () => {
            vault.save(this.state);
        });
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