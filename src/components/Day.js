import PropTypes from "prop-types";

import ConditionPic from "./ConditionPic";

function Day(props) {
  const { name, condition, maxTemp, minTemp, tabIndex, isActive, callback } =
    props;

  return (
    <div
      role="tab"
      tabIndex={tabIndex}
      className={isActive ? "day active-day" : "day"}
      onClick={() => callback()}
    >
      <p className="day-name">{name}</p>
      <ConditionPic cssClass="day-condition-pic" condition={condition} />
      <div className="day-temp">
        <p className="day-temp-max">{maxTemp}°</p>
        <p className="day-temp-min">{minTemp}°</p>
      </div>
    </div>
  );
}

Day.defaultProps = {
  name: "NO_NAME",
  condition: "NO_CONDITION",
  maxTemp: 999,
  minTemp: -999,
  tabIndex: -1,
  isActive: false,
  callback: () => {},
};

Day.propTypes = {
  name: PropTypes.string,
  condition: PropTypes.string,
  maxTemp: PropTypes.number,
  minTemp: PropTypes.number,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  callback: PropTypes.func,
};

export default Day;
