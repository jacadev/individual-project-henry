import { FILTER_BY_NAME } from "../action-types";
import axios from "axios";

const filterByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogs/name?q=${name}`);
      return dispatch({ type: FILTER_BY_NAME, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export default filterByName;