import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './app';

export default class Main extends React.Component{
  render(){
    return(
      <Router>
        <div className="Contents">
        <div className="NavBar">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Login'}>Login</Link></li>
        </div>
        <div className="Container">
          <Switch>
            <Route exact path='/' component={App} />
          </Switch>
        </div>
        </div>
      </Router>
    );
  }
}