import React from 'react';
import { Route, Router } from 'react-router'
import './App.css';
import PropTypes from 'prop-types'

import UserDetail from './views/UserDetail'

import Home from './views/Home'
//import { createBrowserHistory } from 'history'

function App(props) {
  return (
    <Router history= {props.history }>
      <div className="App">
        <Route exact path="/" component={ Home }/>
        <Route path="/detail/:userName" component={ UserDetail }/>
      </div>
    </Router>
    
  );
}

App.prototype= {
  history: PropTypes.any.isRequireds
}
export default App;
