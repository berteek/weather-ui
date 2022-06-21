import PropTypes from "prop-types";

function Day(props) {
  const { date, maxTemp, minTemp, tabIndex, isActive, callback } = props;

  return (
    <div
      role="tab"
      tabIndex={tabIndex}
      className={isActive ? "day active-day" : "day"}
      onClick={() => callback()}
    >
      <h1>{date}</h1>
      <h1>{maxTemp}</h1>
      <h1>{minTemp}</h1>
    </div>
  );
}

Day.defaultProps = {
  date: "NO_DATE",
  maxTemp: 999,
  minTemp: -999,
  tabIndex: -1,
  isActive: false,
  callback: () => {},
};

Day.propTypes = {
  date: PropTypes.string,
  maxTemp: PropTypes.number,
  minTemp: PropTypes.number,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  callback: PropTypes.func,
};

export default Day;
