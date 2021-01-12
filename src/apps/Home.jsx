import React from 'react';
import { useRouteMatch, Route, Switch, Link } from 'react-router-dom';
import ClassesApp from './ClassesAndHooksApp';
import '../styles/general.css';

export default (props) => {
    const { path, url } = useRouteMatch(); 

    const buttonClasses = 'bp3-button bp3-large bp3-intent-primary .modifier';

    const getActive = option => (props.location.pathname.includes(option)) ?
        'bp3-active' : '';

    return (
        <div className="wrapper">
            <div className="menu">
                    <Link 
                        className={`${buttonClasses} ${getActive('hooks')}`}
                        to={`${url}managing-state-with-classes-and-hooks`}>
                        Manejo de estado con<br /> Clases y Hooks
                    </Link>
                    <Link 
                        className={`${buttonClasses} ${getActive('fetching')}`}
                        to={`${url}managing-state-and-data-fetching`}>
                        Manejo de estado y<br /> Data Fetching
                    </Link>
            </div>
            {/* <div className="sidebar">Side bar</div>
            <div className="apps">Apps</div> */}
            <>
                <Switch>
                    <Route path={`${path}managing-state-with-classes-and-hooks`}>
                        <ClassesApp courseType="basic" />
                    </Route>
                    <Route path={`${path}managing-state-and-data-fetching`}>
                        <ClassesApp courseType="advanced" />
                    </Route>
                </Switch>
            </>
        </div>
    );
};