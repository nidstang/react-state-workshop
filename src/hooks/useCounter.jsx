import React from 'react';

export default (initialState) => {
    const [count, setCount] = React.useState(initialState);

    const increment = React.useCallback(() => setCount(count + 1), []);

    return { count, increment };
};