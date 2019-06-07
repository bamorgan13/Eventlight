import axios from "axios";

export const fetchCities = filter => {
  return axios.get("/api/cities", { params: { ...filter } });
};