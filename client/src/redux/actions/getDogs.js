import { GET_DOGS } from "../action-types";
import axios from "axios";

const getDogs = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogs?limit=9&page=${page}`);
      return dispatch({ type: GET_DOGS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export default getDogs;