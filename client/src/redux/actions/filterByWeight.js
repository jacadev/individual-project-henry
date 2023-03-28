import { FILTER_BY_WEIGHT } from "../action-types";
import axios from "axios";

const filterByWeight = (weight) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogs/?weight=${weight}`);
      return dispatch({ type: FILTER_BY_WEIGHT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export default filterByWeight;