import PropTypes from "prop-types";

function CurrentDay(props) {
  const { city, temp, condition } = props;

  return (
    <>
      <h1>{city}</h1>
      <h1>{temp}</h1>
      <h1>{condition}</h1>
    </>
  );
}

CurrentDay.defaultProps = {
  city: "NO_CITY",
  temp: -999,
  condition: "NO_CONDITION",
};

CurrentDay.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  condition: PropTypes.string,
};

export default CurrentDay;
