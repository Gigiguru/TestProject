import React from 'react';
import { connect } from "react-redux";
import * as acts from '../actions/action'
import flow from 'lodash/flow';
import update from 'immutability-helper'
import Item from './item';
import { DropTarget } from 'react-dnd';


class Container extends React.Component {
  constructor(props){
    super(props); 
  }
  AddData(data){
    this.props.AddItem(data,this.props.id)
  }
  RemoveData(text){
    this.props.DeleteItem(text, this.props.id)
  }
  ResetDatas=()=>{
    if (window.confirm('This action will remove all datas from this component')){
      this.props.ResetKanban(this.props.list, this.props.id)
    }
    else{
    }
  }
  SendDataToInfo = (data) => {
    this.props.SetInfoData(data);
  }
  render(){
    //const { canDrop, isOver, connectDropTarget } = this.props;
    
    //const isActive = canDrop && isOver;
    const { connectDropTarget } = this.props;
    const KanbanStyle = this.props.DragActive === null ? "Kanban" : "KanbanHor"
    const backgroundColor = this.props.DragActive ? (this.props.ECTS > 60 ? 'red' : 'green') : 'black';
    const changeIconColor={
      borderTopColor: backgroundColor,
    }
    return connectDropTarget(
      <div className="Kanban" >
        <div className="KanbanLabel" style={changeIconColor}>
            <span>DropTarget:{this.props.id}</span>
            <span><button onClick={this.ResetDatas}> <i className="fa fa-undo"></i> </button> </span>
            <span><i style={ changeIconColor } className="fa fa-download" aria-hidden="true"></i></span>
            <span>{this.props.ECTS}/60</span>
        </div>
        <div className="KanbanItems">
        {this.props.list.map((el, i) => {
          return (
            <Item
              key={el.id}
              index={i}
              Itemtext={el.Id}
              listId={this.props.id}
              dragItem={el}
              RemoveData={this.RemoveData.bind(this)}
              SendDataToInfo={this.SendDataToInfo}  />
          );
        })}
        </div>
      </div>
    );
  }
}

const itemTarget = {
  drop(props, monitor, component) {
    const { id } = props;
    const sourceObj = monitor.getItem();
    if (id !== sourceObj.listId) component.AddData(sourceObj.data);
    return {
      listId: id
    };
  }
}
const mapDispatchToProps = {
  AddItem: acts.AddItem,
  DeleteItem: acts.DeleteItem,
  ResetKanban: acts.ResetKanban,
  SetInfoData: acts.SetInfoData,
}

export default flow(
  DropTarget("ITEM", itemTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    //isOver: monitor.isOver(),
    //canDrop: monitor.canDrop(),
    DragActive:monitor.getItem()
  })),
  connect(null, mapDispatchToProps)
)
(Container);