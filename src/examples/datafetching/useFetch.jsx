import React, { useState, useEffect } from 'react';
import fetch from '../../libs/fetch';

const useFetch = url => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setData(data);
            })
            .catch(() => {
                setLoading(false);
                setError(true)
            });
    }, []);

    return { data, loading, error };
};

export default props => {

    const { data, loading, error } = useFetch('http://fakeurl.com');

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