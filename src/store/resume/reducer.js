import * as actionTypes from './actionTypes';

const initialState = {
  basicInformation: {
    fullName: '',
    phone: '',
    email: '',
  },
};

export default function updateBasicInformation(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_BASIC_INFORMATION:
      return {
        ...state,
        basicInformation: { ...action.basicInformation },
      };
    default:
      return state;
  }
}
