import { FILTER_BY_ORDER } from "../action-types";
import axios from "axios";

const filterByOrder = (order) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogs/?filter=${order}`);
      return dispatch({ type: FILTER_BY_ORDER, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export default filterByOrder;