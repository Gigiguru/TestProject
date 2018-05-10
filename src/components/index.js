import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './app';
import { connect } from "react-redux";
import * as acts from '../actions/action'
import Test from './TestingFiles/test';

class Main extends React.Component{
constructor(props){
  super(props);
  this.state={
    Settings:''
  }
}
  render(){
    const FRight={
      float:'right',
    }
    return(
      <Router>
        <div className="Contents">
        <div className="NavBar">   
            <span><i className="fa fa-align-justify"></i></span>  
            <span><Link to={'/'}>Home</Link></span>
            <span><Link to={'/TestingFiles'}>SomeShit</Link></span>
            <span style={FRight}><Link to={'/Login'}>Login</Link></span>    
        </div>
        <div className="Container">
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/TestingFiles' component={Test} />
          </Switch>
        </div>
        <div className="Footer">
        
        </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  SelectList: state.SelectList,
  KanbanListOne: state.KanbanListOne,
  KanbanListTwo: state.KanbanListTwo,
  KanbanListThree: state.KanbanListThree,
  KanbanListFour: state.KanbanListFour
})

//GETActions, needs import action name
const mapDispatchToProps = {
  AddItem: acts.AddItem,
  GETSTATE: acts.GETSTATE
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
