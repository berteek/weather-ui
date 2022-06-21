import PropTypes from "prop-types";
import Sun from "../sun.svg";

function CurrentDay(props) {
  const { city, temp, condition } = props;

  return (
    <div className="current-day">
      <p className="current-city">{city}</p>
      <div className="current-sun-temp">
        <img className="current-sun" src={Sun} alt="sun" />
        <p className="current-temp">{temp}°</p>
      </div>
      <p className="current-condition">{condition}</p>
    </div>
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
