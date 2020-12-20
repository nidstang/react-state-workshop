import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FetchState from './examples/datafetching/managing-fetch-states';
// import UseFetch from './examples/datafetching/useFetch';
import UseFetchReducer from './examples/datafetching/reducer-useFetch';
// import TodosApp from './apps/TodosApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UseFetchReducer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
