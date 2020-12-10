import React from 'react';

export default (initialState) => {
    const [value, setValue] = React.useState(initialState);

    const increment = () => setValue(value + 1);

    return [value, increment];
}