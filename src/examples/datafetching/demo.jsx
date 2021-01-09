import { init } from 'ramda';
import React, { useState, useEffect } from 'react';
import fetch from '../../libs/fetch';

const initialState = () => ({
    loading: false,
    data: {},
    error: false,
});

const StartFetch = () => ({
    type: 'START_FETCH',
});

const SuccessfulFetch = (data) => ({
    type: 'SUCCESSFUL_FETCH',
    payload: data,
});

const ErrorFetch = () => ({
    type: 'ERROR_FETCH',
});

const reducer = (state = initialState(), { type, payload } = {}) => {
    switch(type) {
        case StartFetch().type:
            return { ...state, loading: true };
        case SuccessfulFetch().type:
            return { ...state, loading: false, data: payload };
        case ErrorFetch().type:
            return Object.assign({}, state, { loading: false, error: true });
        default:
            return state;
    }
};

const useThunkReducer = (reducer, initialState) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const improvedDispatch = React.useCallback(action => {
        if (typeof action === 'function') {
            action(dispatch);
        } else {
            dispatch(action);
        }
    }, [dispatch]);

    return [state, improvedDispatch];
};

const FetchFullName = () => {
    return (dispatch) => {
        dispatch(StartFetch());
        fetch('http://get-my-full-name') // { name, lastname }
            .then(res => res.json())
            // .then(data => data()) // simular un error
            .then(data => {
                dispatch(SuccessfulFetch(data));
            })
            .catch(() => {
                dispatch(ErrorFetch());
            });
    }
};

const useFetch = (url) => {
    const [state, dispatch] = useThunkReducer(reducer, reducer());

    useEffect(() => {
        dispatch(StartFetch());
        fetch(url) // { name, lastname }
            .then(res => res.json())
            .then(data => data()) // simular un error
            .then(data => {
                dispatch(SuccessfulFetch(data));
            })
            .catch(() => {
                dispatch(ErrorFetch());
            });
    }, []);

    return [state.data, state.loading, state.error]

};


export default props => {
    // const [ data, loading, error ] = useFetch('http://my-amazing-service');
    const [state, dispatch] = useThunkReducer(reducer, reducer());

    const User = ({ data }) => (
        <>
            <p>Name: {data.name}</p>
            <p>Lastname: {data.lastname}</p>
        </>
    );

    return (
        <div>
            { state.loading && <p>Loading...</p>}
            { state.data.name && <User data={state.data} /> }
            { state.error ? <p>Error !</p> : <p></p>}
            <button onClick={() => dispatch(FetchFullName())}>Get full name</button>
        </div>
    );
};