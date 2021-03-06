import React from 'react';
import { connect } from "react-redux";
import * as acts from '../actions/action'
import flow from 'lodash/flow';
import update from 'immutability-helper'
import Item from './item';
import { DropTarget } from 'react-dnd';


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm:'',
    }
  }
  AddData(data) {
    this.props.AddItem(data, this.props.id)
  }
  RemoveData(text) {
    this.props.DeleteItem(text, this.props.id)
  }
  FilterItems =(e)=>{
    this.setState({searchTerm:e.target.value})
  }
  SendDataToInfo =(data)=>{
    this.props.SetInfoData(data);
  }
  render() {
     //const isActive = canDrop && isOver;
    //const { canDrop, isOver, connectDropTarget } = this.props;
    const { connectDropTarget } = this.props;
    const NumberOfItems = this.props.list.length; 
    return connectDropTarget(
      <div>
      <div className="SelectOption">
      <input type="text" onChange={this.FilterItems} />
      <input type="text"/>
      <input type="text"/>
      <div className="SelectSortOption">
      {NumberOfItems} <button className="SortButton">Sort By:{"data"}</button>
      </div>
      </div>
      <div className="SelectItems">
      {this.props.list.filter(data => data.Name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((el, i) => {
          return (
            <Item
              key={el.id}
              index={i}
              Itemtext={el.Id}
              listId={this.props.id}
              dragItem={el}
              RemoveData={this.RemoveData.bind(this)}
              SendDataToInfo={this.SendDataToInfo} />
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
  })),
  connect(null, mapDispatchToProps)
)
  (Select);

