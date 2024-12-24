export const add = 'add'
export const del = 'del'
export const add2 = 'add2'
export const del2 = 'del2'
export const addNum = 'addNum'

// Action Creator

export const Addaction = ()=>{
    return {
        type : add
      }
}

export const Delaction = ()=>{
    return {
        type : del
      }
}

// Redux Thunk
export const Add2action = (dispatch) =>{
  dispatch({
    type : add2
  })
}

export const Del2action = (dispatch) =>{
  dispatch({
    type : del2
  })
}