export const AddItem = (item,LISTNAME) => ({
  type:"ADDITEM",
  listname: LISTNAME,
  payload:item
})

export const DeleteItem = (item,ListId) => ({
  type: "DELETEITEM",
  listname: ListId,
  payload: item
})

export const GETSTATE = (STATEDATA) => ({
  type: "STATE",
  payload: STATEDATA
})

export const SetInfoData = (Data) => ({
  type: "SETINFODATA",
  payload: Data
})

export const ResetKanban = (datas,ListId) => ({
  type: "RESET",
  listname: ListId,
  payload: datas
})