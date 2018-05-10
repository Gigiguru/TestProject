import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import flow from 'lodash/flow';

class Item extends React.Component{
  HandleDataToSend=()=>{
    this.props.SendDataToInfo(this.props.dragItem)
  }
   NullDataToSend=()=>{
    this.props.SendDataToInfo('')
  }
  render(){
    const style= {
      height:50,
      border: '1px solid gray',
      margin:5
    }
    const { dragItem, isDragging, connectDragSource, connectDropTarget} =this.props;
    const opacity = isDragging ? 0:1;
    return connectDragSource( //<--- change => connectDragSource(connectDropTarget( to manual sorting 
      <div style={style}
      onMouseEnter={this.HandleDataToSend}
	    onMouseLeave={this.NullDataToSend}>
      {dragItem.Id}
      <br />
      {dragItem.Name}
      </div>
    );  
}
}
//Itemsource
const itemSource = {
  beginDrag(props){
    return{
      index:props.index,
      listId:props.listId,
      data:props.dragItem, //<- important check sourjeobj
      itemtext: props.Itemtext
    };
  },
  endDrag(props,monitor){
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if(dropResult && dropResult.listId !== item.listId){
      props.RemoveData(item.itemtext);
    }
  }
};

//CardTarget, possiblemake manual sorting
const itemTarget = {}

//Export data using flow
export default flow(
  //DropTarget("ITEM",itemTarget,connect =>({
  //  connectDropTarget:connect.dropTarget()
  //})),
  DragSource("ITEM",itemSource, (connect,monitor)=>({
    connectDragSource: connect.dragSource(),
    isDragging:monitor.isDragging()
  }))
)(Item);