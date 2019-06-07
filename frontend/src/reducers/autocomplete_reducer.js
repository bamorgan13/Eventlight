import { combineReducers } from "redux";
import CityReducer from "./cities_reducer";

const AutocompleteReducer = combineReducers({
  cities: CityReducer,
});

export default AutocompleteReducer;