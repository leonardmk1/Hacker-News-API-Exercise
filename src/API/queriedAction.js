import axios from "axios";

export const queryResults = (query) => {
  return axios.get("https://hn.algolia.com/api/v1/search?query=" + query);
};
