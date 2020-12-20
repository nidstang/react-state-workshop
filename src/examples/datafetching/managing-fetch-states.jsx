import React, { useState, useEffect } from 'react';
import fetch from '../../libs/fetch';

export default props => {
    const [data, setData] = useState({
        name: '',
        lastname: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://fakeurl.com')
            .then(res => res.json())
            // .then(res => res())
            .then(data => {
                setLoading(false);
                setData(data);
            })
            .catch(() => {
                setLoading(false);
                setError(true)
            });
    }, []);

    const User = ({ data }) => (
        <>
            <p>Name: {data.name}</p>
            <p>Lastname: {data.lastname} </p>
        </>
    );
    
    return (
        <div>
            { loading ? <p>Loading...</p> : <User data={data} /> }
            { error ? <p>Error!</p> : <p></p>}
        </div>
    );
};