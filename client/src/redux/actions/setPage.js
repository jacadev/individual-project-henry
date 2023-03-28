import { SET_PAGE } from "../action-types";

const setPage = (page) => {
  return (dispatch) => dispatch({ type: SET_PAGE, payload: page });
};

export default setPage;