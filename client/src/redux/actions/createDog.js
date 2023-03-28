import { CREATE_DOG } from "../action-types";

const createDog = (character) => {
  character = {
    ...character,
  };

  return {
    type: CREATE_DOG,
    payload: { ...character },
  };
};

export default createDog;