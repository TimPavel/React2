import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import { Layout } from './app/layouts/Layout';
import { Main } from './app/pages/Main';
import { PageNotFound } from './app/pages/PageNotFound';


ReactDom.render(<Router history={ browserHistory }>
  <Route path="/" component={ Layout }>
    <IndexRoute component={ Main } />

    <Route path="*" component={ PageNotFound } />
  </Route>
</Router>, document.querySelector("#root"));