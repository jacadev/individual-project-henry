import { FILTER_BY_TEMP } from "../action-types";
import axios from "axios";

const filterByTemp = (temp) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogs/?temp=${temp}`);
      return dispatch({ type: FILTER_BY_TEMP, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export default filterByTemp;