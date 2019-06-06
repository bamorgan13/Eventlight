import * as CityApiUtil from "../util/city_api_util";

export const RECEIVE_CITIES = "RECEIVE_CITIES";

export const receiveCities = cities => {
  return {
    type: RECEIVE_CITIES,
    cities
  };
};

export const fetchCities = filter => {
  return dispatch => {
    return CityApiUtil.fetchCities(filter)
      .then( cities => dispatch(receiveCities(cities)) );
  };
};