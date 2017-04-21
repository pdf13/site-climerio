import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './Home';
import factories from './factories';
import Gallery from './Gallery';

import './index.css';

const routes = (
    <Router history={hashHistory}>
       <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {
            Object.entries(factories).map(([id, {url}]) => <Route path={url} key={id} component={() => <Gallery factory={id} />} /> )
        }
       </Route>
    </Router>
);

render(routes, document.getElementById('root'));
