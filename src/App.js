import './scss/App.scss';

import React from 'react';

import { NavLink, Route, Switch } from 'react-router-dom';
import { uid } from 'react-uid';

const App = ({ routes, initialData }) =>
  (routes ? (
    <div className="App">
      <nav>
        {routes.map((route, index) => (
          <NavLink style={{ marginRight: '1rem', color: '#0af' }} activeStyle={{ fontWeight: 800, color: '#000' }} key={`nav-${uid(route)}`} exact={index === 0} to={route.path}>
            {route.name}
          </NavLink>
        ))}
      </nav>
      <Switch>
        {routes.map((route, index) => (
          // pass in the initialData from the server or window.DATA for this
          // specific route
          <Route
            key={uid(route)}
            path={route.path}
            exact={route.exact}
            render={props =>
              React.createElement(route.component, {
                ...props,
                initialData: initialData[index] || null,
              })}
          />
        ))}
      </Switch>
    </div>
  ) : null);

export default App;
