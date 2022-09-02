import { TITLECHANGED, AUTHORCHANGED, TAGCHANGED } from "./actionTypes";

const initialState = {
  title: "",
  author: "",
  tag: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TITLECHANGED:
      return {
        ...state,
        title: action.payload.toLowerCase(),
      };

    case AUTHORCHANGED:
      return {
        ...state,
        author: action.payload,
      };

    case TAGCHANGED:
      return {
        ...state,
        tag: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
