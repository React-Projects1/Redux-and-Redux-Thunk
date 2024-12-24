import React from "react";
import { useDispatch,useSelector } from 'react-redux'
import { Addaction ,Delaction ,Add2action ,Del2action ,addNum} from "./Redux/Actions/ActionType";

const Counter = () => {
  // const state = useSelector( state => state.x )
  const state = useSelector( state => state.red1.x )
  const dispatch = useDispatch()

  const Add = ()=>{
    dispatch(Addaction())
  }

  const Del = ()=>{
    dispatch(Delaction())
  }

  const Add2 = ()=>{
    Add2action(dispatch)
  }

  const Del2 = ()=>{
    Del2action(dispatch)
  }

  const AddNum = (m)=>{
    dispatch({
      type : addNum,
      value: m
    })
  }


  return (
    <div>
      <h1>Counter is:</h1>
      <p>{state}</p>
      <button onClick={Add}>ADD</button>
      <button onClick={Del}>Delete</button>
      <button onClick={Add2}>ADD 2</button>
      <button onClick={Del2}>Delete 2</button>
      <button onClick={()=>AddNum(100)}>ADD Number</button>
    </div>
  );
};

export default Counter;
