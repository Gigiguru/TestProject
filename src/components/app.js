import React from 'react';
import axios from "axios"
import { connect } from "react-redux";
import * as acts from '../actions/action'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './container';
import Select from './select';
import Info from './info';
import flow from 'lodash/flow';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={

    }
  }
  componentWillMount(){
    axios.get(`datas.json`,)
      .then(res => {
        console.log(res.data)
        this.props.GETSTATE(res.data)
      })
      .catch(err =>{
        console.log("err")
      })
  }
  render(){
    const ListOneECTS = this.props.KanbanListOne.reduce((t, next) => t + next.ECTS, 0)
    const ListTwoECTS = this.props.KanbanListTwo.reduce((t, next) => t + next.ECTS, 0)
    const ListThreeECTS = this.props.KanbanListThree.reduce((t, next) => t + next.ECTS, 0)
    const ListFourECTS = this.props.KanbanListFour.reduce((t, next) => t + next.ECTS, 0)
    const style = {
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "20px"
    }
    return (
      <div style={{ ...style }}>
        <Select id={1} list={this.props.SelectList} />
        <Container id={2} list={this.props.KanbanListOne}  />
        <Container id={3} list={this.props.KanbanListTwo} />
        <Container id={4} list={this.props.KanbanListThree} />
        <Container id={5} list={this.props.KanbanListFour} />
        <Info />
      </div>
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

export default flow(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, mapDispatchToProps)
)(App);
