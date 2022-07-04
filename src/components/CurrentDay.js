import PropTypes from "prop-types";

import ConditionPic from "./ConditionPic";

function CurrentDay(props) {
  const { city, temp, condition, conditionCode } = props;

  return (
    <div className="current-day">
      <p className="current-city">{city}</p>
      <div className="current-condition-pic-temp">
        <ConditionPic code={conditionCode} />
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
  conditionCode: "NO_CONDITION_CODE",
};

CurrentDay.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  condition: PropTypes.string,
  conditionCode: PropTypes.string,
};

export default CurrentDay;
