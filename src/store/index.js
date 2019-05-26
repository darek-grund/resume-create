import { createStore, combineReducers } from 'redux';
import resume from './resume';
import { resume as resumeMock } from '../mocks/resume';

const reducer = combineReducers({
  resume,
});

export default createStore(
  reducer,
  { resume: resumeMock },
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
