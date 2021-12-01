import * as constant from "../customConstants";

export const initialState = {
  user: [],
  loading: false,
  error: null,
};

const SampleUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constant.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case constant.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SampleUserReducer;
