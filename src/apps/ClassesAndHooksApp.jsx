import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from '../routes';

export default () => {

    return (
        <>
            <h1>HII</h1>
            <div className="links">
                { routes.map(({ path }) => <Link to={path}>{path}</Link>)}
            </div>
            <div className="app">
                <Switch>
                    { routes.map(props => <Route {...props} />) }
                </Switch>
            </div>
        </>
    );
};