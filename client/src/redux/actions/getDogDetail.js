import { GET_DOG_DETAIL } from "../action-types";
import axios from "axios";

const getDogDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({ type: GET_DOG_DETAIL, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export default getDogDetail;