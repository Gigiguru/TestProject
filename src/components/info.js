import React from 'react';
import { connect } from "react-redux";

class Info extends React.Component{
  InitalInfoData=()=>{
    return [];
  }
  render(){
    const style ={
      width:200,
      overflow:'hidden'
    }
    //const All = this.props.SelectList.concat(this.props.KanbanListOne)
    const Select = this.props.SelectList
    const ShowAll = this.InitalInfoData();
	return(
	  <div style={style}>
	  {this.props.WhatIShow ==='' ? 
	  <div> loadinn.. </div>:
	  <div>
	   {this.props.WhatIShow.Id}
      <hr />
      {this.props.WhatIShow.Name}
      {this.props.WhatIShow.ECTS}
	  </div>
	  }
     </div>
	
    );
	
 
  }
}
const mapStateToProps = state => ({
  SelectList: state.SelectList,
  KanbanListOne: state.KanbanListOne,
  WhatIShow: state.WhatInfoShows,
})

//GETActions, needs import action name
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Info);