import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

import { actions, selectors } from '../../store/counter';

const ResumeBasicInformation = () => {
  const [basicInformation, setBasicInformation] = useState({
    fullName: 'dariuszxyz',
    phone: '777',
    email: 'a@a.pl',
  });

  const handleSubmit = () => {
    console.log(basicInformation);
  };

  return (
    <Card>
      <h2 className="mb-5">Basic information</h2>
      <div className="mb-4">
        <TextField
          placeholder="Full Name"
          defaultValue={basicInformation.fullName}
          onChangeCallback={fullName => setBasicInformation({ ...basicInformation, fullName })}
        />
      </div>
      <div className="mb-4">
        <TextField
          placeholder="Phone"
          defaultValue={basicInformation.phone}
          onChangeCallback={phone => setBasicInformation({ ...basicInformation, phone })}
        />
      </div>
      <div className="mb-4">
        <TextField
          placeholder="E-mail"
          defaultValue={basicInformation.email}
          onChangeCallback={email => setBasicInformation({ ...basicInformation, email })}
        />
      </div>
      <div className="d-flex justify-content-end mb-4">
        <Button onClickCallback={handleSubmit}>Save</Button>
      </div>
    </Card>
  );
};

ResumeBasicInformation.propTypes = {
  /*  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  getCount: PropTypes.func.isRequired,*/
};

function mapStateToProps(state) {
  return {
    /*    getCount: selectors.getCounterValue(state),
    count: state.counter.count,*/
  };
}

const mapDispatchToProps = dispatch => {
  return {
    /*    increment: value => dispatch(actions.increment(value)),
    decrement: value => dispatch(actions.decrement(value)),*/
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeBasicInformation);
