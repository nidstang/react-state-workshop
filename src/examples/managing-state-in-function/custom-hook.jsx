import React from 'react';
import * as R from 'ramda';
import Counter from '../../components/counter';

const useCounter = ([value, setValue]) => { // usecounter = (initialState) with useState inside
    const increment = () => setValue(v => v + 1);
    const decrement = () => setValue(v => v - 1);
    const reset = () => setValue(0);

    return [value, increment, decrement, reset];
};

const useWeightCounter = ([count, increment, decrement, reset]) => {
    return {
        WeightCounter: () => (
            <>
                <p>Your weight</p>
                <Counter
                    value={count}
                    increment={increment}
                    reset={reset}
                    decrement={decrement}
                />
            </>
        )
    }

};

export default (props) => {
    const { WeightCounter } = R.compose(
        useWeightCounter,
        useCounter,
        React.useState,
    );

    return <WeightCounter />;
};