import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
  return (
    <>
      <hr />
      <h1>CounterApp</h1>
      <h2> {value} </h2>
    </>
  )
}

CounterApp.propTypes ={
  value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
  value: 0,
}