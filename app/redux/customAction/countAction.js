import * as constant from '../customConstants';

export function incrementAction(value = 1) {
  return {
    type: constant.SET_INCREMENT,
    payload: value,
  };
}

export function decrementAction(value = 1) {
  return {
    type: constant.SET_DECREMENT,
    payload: value,
  };
}