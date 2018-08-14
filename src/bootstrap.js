import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import reducers from './reducers';
import posed from "react-pose";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import Homepage from './components/homepage';
import About from './components/about';
import Skills from './components/skills';
import Resume from './components/resume';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
      </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
