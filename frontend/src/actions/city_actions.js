import * as CityApiUtil from "../util/city_api_util";

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const CLEAR_CITIES = "CLEAR_CITIES";

export const receiveCities = cities => {
  return {
    type: RECEIVE_CITIES,
    cities
  };
};

export const clearCities = () => {
  return {
    type: CLEAR_CITIES
  };
};

export const fetchCitiesAuto = filter => {
  return dispatch => {
    if (!filter.city) return dispatch(clearCities());
    return CityApiUtil.fetchCitiesAuto(filter)
      .then( cities => dispatch(receiveCities(cities)) );
  };
};
