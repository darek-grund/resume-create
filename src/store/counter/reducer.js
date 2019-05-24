import * as actionTypes from './actionTypes';

export default function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        count: state.count + action.value,
      };
    case actionTypes.DECREMENT:
      return {
        count: state.count - action.value,
      };
    default:
      return state;
  }
}
