import React from 'react';
import PropTypes from 'prop-types';
import StatelessComponent from './StatelessComponent';

const Inputs = ({updateInput, input}) => (
  <>
    <input onChange={updateInput} />
    <p>{input}</p>
  </>
);

const Layout = (props) => (
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    {props.children}
  </div>
);

const Form = ({input, count, updateInput, increaseCount}) => (
  <Layout>
    <Inputs
      updateInput={updateInput}
      input={input}
    />
    <StatelessComponent
      increaseCount={increaseCount}
      count={count}
    />
  </Layout>
);

Form.propTypes = {
  input: PropTypes.string,
  count: PropTypes.number,
  updateInput: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
};

Form.defaultProps = {
  input: 'Hello!',
  count: 3,
};


export default Form;
