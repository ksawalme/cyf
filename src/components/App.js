import { BrowserRouter, Route, Switch } from 'react-router-dom';


import React from 'react';

import HomePage from "./HomePage.js"
import SearchPage from './search/SearchPage';


const classNames = require('./App.css');

class App extends React.Component {
  constructor() {
    super();
    //In React, components have state!
    //React state: If change, the component will be reloaded! (Interesting)
    this.state = {
      user: null,
      images: []
    };
  }


  render() {
    return (
      <div className={classNames.app}>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/search' component={SearchPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

