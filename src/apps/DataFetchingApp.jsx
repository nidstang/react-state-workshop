import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import routes from '../routes';

export default () => {
    const { path, url } = useRouteMatch(); 

    const courseRoutes = routes.filter(({ course }) => course === 'advanced');

    return (
        <>
            <div className="sidebar">
                { courseRoutes.map(({ path, name }) => <p><Link to={`${url}${path}`}>{name}</Link></p>)}
            </div>
            <div className="apps">
                <Switch>
                    { courseRoutes.map(props => <Route {...props} path={`${path}${props.path}`} />) }
                </Switch>
            </div>
        </>
    );
};