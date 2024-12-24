import { combineReducers } from "redux";
import Reducer1 from "./Reducer1";
import Reducer2 from "./Reducer2";

export default combineReducers({
    red1: Reducer1,
    red2: Reducer2,
})
