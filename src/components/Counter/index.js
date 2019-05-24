import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions, selectors } from '../../store/counter';

const Counter = props => {
  const { count, increment, decrement, getCount } = props;
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button type="button" onClick={() => decrement(2)}>
          -
        </button>
        <span>
          {count}
          {getCount}
        </span>
        <button type="button" onClick={() => increment(1)}>
          +
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  getCount: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    getCount: selectors.getCounterValue(state),
    count: state.counter.count,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: value => dispatch(actions.increment(value)),
    decrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
