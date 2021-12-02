import * as constant from '../customConstants'

export const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SET_INCREMENT:
      return {
        ...state,
        count : state.count + action.payload
      }
    case constant.SET_DECREMENT:
      return {
        ...state,
        count : state.count - action.payload >= 0 ? state.count - action.payload : 0
      }
    default:
      return state
  }
}

export default countReducer;
