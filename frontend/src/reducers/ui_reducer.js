import { combineReducers } from "redux";
import FiltersReducer from "./filters_reducer";

const UiReducer = combineReducers({
  filter: FiltersReducer
});

export default UiReducer;