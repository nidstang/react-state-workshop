import React from 'react';
import { useRouteMatch, Route, Switch, Link } from 'react-router-dom';
import ClassesAndHooksApp from './ClassesAndHooksApp';

export default () => {
    const { path, url } = useRouteMatch(); 

    return (
        <div className="wrapper">
            <div className="menu">
                <Link to={`${url}/managing-state-with-classes-and-hooks`}>Manejando el estado con Clases y Hooks</Link>
            </div>
            <div className="content">
                <Switch>
                    <Route exact path={`${path}/managing-state-with-classes-and-hooks`} component={ClassesAndHooksApp} />
                </Switch>
            </div>
        </div>
    );
};