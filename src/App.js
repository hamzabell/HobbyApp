import React, { Component } from 'react';
import Loginform from './components/loginfom';
import Header from './components/header';
import Hobby from './components/hobby';
import Register from './components/register';
import Homepage from './components/homepage';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <Switch>
      <Route exact path= "/" component={Homepage} />
        <Route exact path= "/login" component={Loginform} />
        <Route exact path= "/hobby" component={Hobby} />
        <Route exact path= "/register" component={Register} />
      </Switch>
     
     
      
      </div>
      </Router>
    );
  }
}

export default App;
