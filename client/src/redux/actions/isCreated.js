import { IS_CREATED } from "../action-types";
import axios from "axios";

const isCreated = (isCreated) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogs/?created=${isCreated}`);
      return dispatch({ type: IS_CREATED, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export default isCreated;