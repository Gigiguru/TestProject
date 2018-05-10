const initialState = {
  SelectList: [],
  KanbanListOne:[],
  KanbanListTwo: [],
  KanbanListThree: [],
  KanbanListFour: [],
  WhatInfoShows:'',
};
const rootReducer = (state = initialState, action) =>{
  switch(action.type){
  //ADD FUNCTIONS
    case "ADDITEM":
      switch (action.listname){
        case 1:
        return { ...state, SelectList: [...state.SelectList, action.payload] };
        case 2:
        return { ...state, KanbanListOne: [...state.KanbanListOne, action.payload] };
        case 3:
          return { ...state, KanbanListTwo: [...state.KanbanListTwo, action.payload] };
        case 4:
          return { ...state, KanbanListThree: [...state.KanbanListThree, action.payload] };
        case 5:
          return { ...state, KanbanListFour: [...state.KanbanListFour, action.payload] };
      }
    //DELETE FUNCTIONS
    case "DELETEITEM":
      switch (action.listname) {
        case 1:{
          let temp = state.SelectList.filter(data => data.Id !== action.payload)
          return { ...state, SelectList: temp };
        }
        case 2:{
          let temp = state.KanbanListOne.filter(data => data.Id !== action.payload)
          return { ...state, KanbanListOne: temp };
        } 
        case 3: {
          let temp = state.KanbanListTwo.filter(data => data.Id !== action.payload)
          return { ...state, KanbanListTwo: temp };
        } 
        case 4: {
          let temp = state.KanbanListThree.filter(data => data.Id !== action.payload)
          return { ...state, KanbanListThree: temp };
        } 
        case 5: {
          let temp = state.KanbanListFour.filter(data => data.Id !== action.payload)
          return { ...state, KanbanListFour: temp };
        } 
      }
    //RESET FUNCTIONS
    case "RESET":
    switch(action.listname){
      case 2:{
        return { ...state, 
        SelectList: state.SelectList.concat(action.payload),
        KanbanListOne: [],
        }
      }
      case 3: {
        return {
          ...state,
          SelectList: state.SelectList.concat(action.payload),
          KanbanListTwo: [],
        }
      }
      case 4: {
        return {
          ...state,
          SelectList: state.SelectList.concat(action.payload),
          KanbanListThree: [],
        }
      }
      case 5: {
        return {
          ...state,
          SelectList: state.SelectList.concat(action.payload),
          KanbanListFour: [],
        }
      }  
    }
    //GETDATATOINITIALSTATE
    case "STATE": 
      {
        return { ...state, 
        KanbanListOne: action.payload.KanbanListOne, 
        SelectList: action.payload.SelectList,
        }
      }
    //SET DATA TO INFO
    case "SETINFODATA": 
    {
        return { ...state, WhatInfoShows: action.payload}
    }
    default:
      return state
  }
  
}


export default rootReducer;