import { add, del, add2, del2 ,addNum} from "../Actions/ActionType";

const Reducer1 = (state = { x: 0 }, action) => {
  switch (action.type) {
    case add:
      return { ...state, x: state.x + 1 };
    case del:
      return { ...state, x: state.x - 1 };
    case add2:
      return { ...state, x: state.x + 2 };
    case del2:
      return { ...state, x: state.x - 2 };
    case addNum:
      return { ...state, x: state.x + action.value };
    default:
      return state;
  }
};

export default Reducer1;
