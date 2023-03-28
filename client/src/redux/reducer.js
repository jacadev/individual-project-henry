import {
  GET_DOGS,
  GET_DOG_DETAIL,
  CREATE_DOG,
  DELETE_DOG,
  GET_TEMPERAMENTS,
  FILTER_BY_NAME,
  FILTER_BY_TEMP,
  FILTER_BY_WEIGHT,
  IS_CREATED,
  FILTER_BY_ORDER,
  SET_PAGE,
} from "./action-types";

const initialState = {
  dogs: [],
  dogDetail: {},
  temperaments: [],
  page:0,
  pagination: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    case FILTER_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };

    case FILTER_BY_TEMP:
      return {
        ...state,
        dogs: action.payload,
      };

    case FILTER_BY_WEIGHT:
      return {
        ...state,
        dogs: action.payload,
      };

    case FILTER_BY_ORDER:
      return {
        ...state,
        dogs: action.payload,
      };

    case IS_CREATED:
      return {
        ...state,
        dogs: action.payload,
      };    

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case CREATE_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.payload],
      };

    case DELETE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter((dog) => dog.id !== action.payload),
      };

    default:
      return state;
  }
};

export default rootReducer;
