import React, { useState, useEffect, useReducer } from 'react';
import fetch from '../../libs/fetch';

const initialState = () => ({
    loading: false,
    data: {},
    error: false,
});

const startFetch = () => ({
    type: 'START_FETCH',
});

const successFetch = (data) => ({
    type: 'SUCCESS_FETCH',
    payload: data
});

const errorFetch = (/* error */) => ({
    type: 'ERROR_FETCH',
});

const reducer = (state = initialState(), { type, payload } = {}) => {
    switch(type) {
        case startFetch().type:
            return { ...state, loading: true };
        case successFetch().type:
            return { ...state, loading: false, data: payload };
        case errorFetch().type:
            return { ...state, loading: false, error: true };
        default:
            return state;
    };
};

const useFetch = url => {
    const [state, dispatch] = useReducer(reducer, reducer());

    useEffect(() => {
        dispatch(startFetch());
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(successFetch(data))
            })
            .catch(() => {
                dispatch(errorFetch());
            });
    }, []);

    return [state.data, state.loading, state.error];
};

export default props => {

    const [data, loading, error] = useFetch('http://fakeurl.com');

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