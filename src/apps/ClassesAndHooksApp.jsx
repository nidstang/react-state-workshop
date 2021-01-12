import React from 'react';
import { Switch, Route, Link, useRouteMatch, useLocation } from 'react-router-dom';
import routes from '../routes';
import '../styles/counterApp.css'

export default ({ courseType = 'basic', ...props }) => {
    const { path, url } = useRouteMatch(); 

    const courseRoutes = routes.filter(({ course, name }) => course === courseType && name);
    const buttonClasses = 'bp3-button .modifier';
    const location = useLocation();

    const getActive = path => (location.pathname === path) ?
        'bp3-active' : '';
    

    return (
        <>
            <div className="sidebar">
                { courseRoutes.map((route) => 
                    <Link className={`${buttonClasses} ${getActive(`${url}${route.path}`)}`} to={`${url}${route.path}`}>{route.name}</Link>
                )}
            </div>
            <div className="apps">
                <Switch>
                    { courseRoutes.map(props => <Route {...props} path={`${path}${props.path}`} />) }
                </Switch>
            </div>
        </>
    );
};