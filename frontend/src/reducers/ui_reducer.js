import { combineReducers } from "redux";
import FiltersReducer from "./filters_reducer";
import AutocompleteReducer from "./autocomplete_reducer";

const UiReducer = combineReducers({
  filter: FiltersReducer,
  autocomplete: AutocompleteReducer
});

export default UiReducer;