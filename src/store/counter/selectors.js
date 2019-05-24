export const getCounter = state => state.counter;

export const getCounterValue = state => getCounter(state).count + 99;
