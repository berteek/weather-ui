import PropTypes from "prop-types";

function Day(props) {
  const { date, maxTemp, minTemp } = props;

  return (
    <>
      <h1>{date}</h1>
      <h1>{maxTemp}</h1>
      <h1>{minTemp}</h1>
    </>
  );
}

Day.defaultProps = {
  date: "NO_DATE",
  maxTemp: 999,
  minTemp: -999,
};

Day.propTypes = {
  date: PropTypes.string,
  maxTemp: PropTypes.number,
  minTemp: PropTypes.number,
};

export default Day;
