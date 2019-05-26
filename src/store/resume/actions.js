import * as actionTypes from './actionTypes';

export const updateBasicInformation = basicInformation => ({
  type: actionTypes.UPDATE_BASIC_INFORMATION,
  basicInformation,
});
