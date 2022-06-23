import PropTypes from "prop-types";

import Sunny from "../svg/sun.svg";

function ConditionPic(props) {
  const { cssClass, condition } = props;

  let conditionPic;
  switch (condition) {
    case "Солнечно":
      conditionPic = Sunny;
      break;
    default:
      conditionPic = null;
      break;
  }

  return <img className={cssClass} src={conditionPic} alt="Condition" />;
}

ConditionPic.propTypes = {
  condition: PropTypes.string,
  cssClass: PropTypes.string,
};

ConditionPic.defaultProps = {
  condition: "Солнечно",
  cssClass: "current-condition-pic",
};

export default ConditionPic;
