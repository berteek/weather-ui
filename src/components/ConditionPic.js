import PropTypes from "prop-types";

import Day from "../svg/day.svg";
import Night from "../svg/night.svg";
import FewCloudsDay from "../svg/few_clouds_d.svg";
import FewCloudsNight from "../svg/few_clouds_n.svg";
import ScatteredClouds from "../svg/scattered_clouds.svg";
import BrokenClouds from "../svg/broken_clouds.svg";
import ShowerRain from "../svg/shower_rain.svg";
import RainDay from "../svg/rain_d.svg";
import RainNight from "../svg/rain_n.svg";
import Thunderstorm from "../svg/thunderstorm.svg";
import Snow from "../svg/snow.svg";
import Mist from "../svg/mist.svg";

function ConditionPic(props) {
  const { cssClass, code } = props;

  let conditionPic;
  switch (code) {
    case "01d":
      conditionPic = Day;
      break;
    case "01n":
      conditionPic = Night;
      break;
    case "02d":
      conditionPic = FewCloudsDay;
      break;
    case "02n":
      conditionPic = FewCloudsNight;
      break;
    case "03d":
      conditionPic = ScatteredClouds;
      break;
    case "03n":
      conditionPic = ScatteredClouds;
      break;
    case "04d":
      conditionPic = BrokenClouds;
      break;
    case "04n":
      conditionPic = BrokenClouds;
      break;
    case "09d":
      conditionPic = ShowerRain;
      break;
    case "09n":
      conditionPic = ShowerRain;
      break;
    case "10d":
      conditionPic = RainDay;
      break;
    case "10n":
      conditionPic = RainNight;
      break;
    case "11d":
      conditionPic = Thunderstorm;
      break;
    case "11n":
      conditionPic = Thunderstorm;
      break;
    case "13d":
      conditionPic = Snow;
      break;
    case "13n":
      conditionPic = Snow;
      break;
    case "50d":
      conditionPic = Mist;
      break;
    case "50n":
      conditionPic = Mist;
      break;
    default:
      conditionPic = null;
      break;
  }

  return <img className={cssClass} src={conditionPic} alt="Condition" />;
}

ConditionPic.propTypes = {
  code: PropTypes.string,
  cssClass: PropTypes.string,
};

ConditionPic.defaultProps = {
  code: "Солнечно",
  cssClass: "current-condition-pic",
};

export default ConditionPic;
