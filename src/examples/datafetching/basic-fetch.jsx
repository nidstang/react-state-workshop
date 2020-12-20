import React, { useState, useEffect } from 'react';
import fetch from '../../libs/fetch';

export default props => {
    const [data, setData] = useState({
        name: '',
        lastname: '',
    });

    useEffect(() => {
        fetch('http://fakeurl.com')
            .then(res => res.json())
            .then(setData);
    }, []);
    
    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Lastname: {data.lastname} </p>
        </div>
    );
};