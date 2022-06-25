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
      <p className="details-title">Подробности</p>
      <div className="details-12">
        <div className="details-1">
          <div className="details-item">
            <p className="details-item-title">По ощущениям</p>
            <p className="details-item-value">{feelsTemp}°</p>
          </div>
          <div className="details-item">
            <p className="details-item-title">Влажность</p>
            <p className="details-item-value">{humidity}%</p>
          </div>
          <div className="details-item">
            <p className="details-item-title">Видимость</p>
            <p className="details-item-value">{visibility} км</p>
          </div>
          <div className="details-item">
            <p className="details-item-title">Давление</p>
            <p className="details-item-value">{atmPressure} мм</p>
          </div>
          <div className="details-item">
            <p className="details-item-title">Ветер</p>
            <p className="details-item-value">{windSpeed} м/с</p>
          </div>
          <div className="details-item" />
        </div>
        <div className="details-2">
          <div className="details-item">
            <p className="details-item-title">Восход</p>
            <p className="details-item-value">{riseTime}</p>
          </div>
          <div className="details-item">
            <p className="details-item-title">Закат</p>
            <p className="details-item-value">{dawnTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Details.defaultProps = {
  feelsTemp: 999,
  humidity: 999,
  visibility: 999,
  atmPressure: 999,
  windSpeed: 999,
  riseTime: "10:10",
  dawnTime: "20:20",
};

Details.propTypes = {
  feelsTemp: PropTypes.number,
  humidity: PropTypes.number,
  visibility: PropTypes.number,
  atmPressure: PropTypes.number,
  windSpeed: PropTypes.number,
  riseTime: PropTypes.string,
  dawnTime: PropTypes.string,
};

export default Details;
