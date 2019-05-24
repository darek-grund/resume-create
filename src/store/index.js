import { createStore, combineReducers } from 'redux';
import counter from './counter';

const reducer = combineReducers({
  counter,
});

const preloadedState = {
  counter: {
    count: 10,
  },
};

export default createStore(
  reducer,
  preloadedState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
