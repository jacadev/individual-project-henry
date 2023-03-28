import { GET_TEMPERAMENTS } from "../action-types";
import axios from "axios";

const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:3001/temperaments');
      return dispatch({ type: GET_TEMPERAMENTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export default getTemperaments;