import { DELETE_DOG } from "../action-types";

const deleteDog = (id) => {
  return {
    type: DELETE_DOG,
    payload: id,
  };
};

export default deleteDog;