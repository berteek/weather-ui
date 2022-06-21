import PropTypes from "prop-types";

function Details(props) {
  const {
    feelsTemp,
    humidity,
    visibility,
    atmPressure,
    windSpeed,
    riseTime,
    dawnTime,
  } = props;

  return (
    <div>
      <h1>{feelsTemp}</h1>
      <h1>{humidity}</h1>
      <h1>{visibility}</h1>
      <h1>{atmPressure}</h1>
      <h1>{windSpeed}</h1>
      <h1>{riseTime}</h1>
      <h1>{dawnTime}</h1>
    </div>
  );
}

Details.defaultProps = {
  feelsTemp: 999,
  humidity: 999,
  visibility: 999,
  atmPressure: 999,
  windSpeed: 999,
  riseTime: 999,
  dawnTime: 999,
};

Details.propTypes = {
  feelsTemp: PropTypes.number,
  humidity: PropTypes.number,
  visibility: PropTypes.number,
  atmPressure: PropTypes.number,
  windSpeed: PropTypes.number,
  riseTime: PropTypes.number,
  dawnTime: PropTypes.number,
};

export default Details;
