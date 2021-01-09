import React from 'react';

export default ({ onClick, notToggled }) => {
    return <section class="toggle-all">
        <button onClick={onClick}>Toggle All ({notToggled})</button>
    </section>
};