import PropTypes from "prop-types";

import { capitalizeFirstLetter } from "../Utils";

import Day from "./Day";

function Days(props) {
  const { activeDay, setActiveDay, dailyData } = props;

  const day2 = new Date(0);
  day2.setUTCSeconds(dailyData.daily[2].dt);

  const day3 = new Date(0);
  day3.setUTCSeconds(dailyData.daily[3].dt);

  const day4 = new Date(0);
  day4.setUTCSeconds(dailyData.daily[4].dt);

  const day5 = new Date(0);
  day5.setUTCSeconds(dailyData.daily[5].dt);

  const day6 = new Date(0);
  day6.setUTCSeconds(dailyData.daily[6].dt);

  return (
    <>
      <p className="days-title">По дням</p>
      <div className="days">
        <Day
          name="Сегодня"
          conditionCode={dailyData.daily[0].weather[0].icon}
          maxTemp={Math.round(dailyData.daily[0].temp.max)}
          minTemp={Math.round(dailyData.daily[0].temp.min)}
          tabIndex={0}
          isActive={activeDay === 0}
          callback={() => {
            setActiveDay(0);
          }}
        />
        <Day
          name="Завтра"
          conditionCode={dailyData.daily[1].weather[0].icon}
          maxTemp={Math.round(dailyData.daily[1].temp.max)}
          minTemp={Math.round(dailyData.daily[1].temp.min)}
          tabIndex={-1}
          isActive={activeDay === 1}
          callback={() => {
            setActiveDay(1);
          }}
        />
        <Day
          name={capitalizeFirstLetter(
            day2.toLocaleDateString("ru", {
              weekday: "short",
              day: "numeric",
            })
          )}
          conditionCode={dailyData.daily[2].weather[0].icon}
          maxTemp={Math.round(dailyData.daily[2].temp.max)}
          minTemp={Math.round(dailyData.daily[2].temp.min)}
          tabIndex={-2}
          isActive={activeDay === 2}
          callback={() => {
            setActiveDay(2);
          }}
        />
        <Day
          name={capitalizeFirstLetter(
            day3.toLocaleDateString("ru", {
              weekday: "short",
              day: "numeric",
            })
          )}
          conditionCode={dailyData.daily[3].weather[0].icon}
          maxTemp={Math.round(dailyData.daily[3].temp.max)}
          minTemp={Math.round(dailyData.daily[3].temp.min)}
          tabIndex={-3}
          isActive={activeDay === 3}
          callback={() => {
            setActiveDay(3);
          }}
        />
        <Day
          name={capitalizeFirstLetter(
            day4.toLocaleDateString("ru", {
              weekday: "short",
              day: "numeric",
            })
          )}
          conditionCode={dailyData.daily[4].weather[0].icon}
          maxTemp={Math.round(dailyData.daily[4].temp.max)}
          minTemp={Math.round(dailyData.daily[4].temp.min)}
          tabIndex={-4}
          isActive={activeDay === 4}
          callback={() => {
            setActiveDay(4);
          }}
        />
        <Day
          name={capitalizeFirstLetter(
            day5.toLocaleDateString("ru", {
              weekday: "short",
              day: "numeric",
            })
          )}
          conditionCode={dailyData.daily[5].weather[0].icon}
          maxTemp={Math.round(dailyData.daily[5].temp.max)}
          minTemp={Math.round(dailyData.daily[5].temp.min)}
          tabIndex={-5}
          isActive={activeDay === 5}
          callback={() => {
            setActiveDay(5);
          }}
        />
        <Day
          name={capitalizeFirstLetter(
            day6.toLocaleDateString("ru", {
              weekday: "short",
              day: "numeric",
            })
          )}
          conditionCode={dailyData.daily[6].weather[0].icon}
          maxTemp={Math.round(dailyData.daily[6].temp.max)}
          minTemp={Math.round(dailyData.daily[6].temp.min)}
          tabIndex={-6}
          isActive={activeDay === 6}
          callback={() => {
            setActiveDay(6);
          }}
        />
      </div>
    </>
  );
}

const { arrayOf, number, shape, string, func } = PropTypes;

const descriptioniconidmainShape = shape({
  description: string,
  icon: string,
  id: number,
  main: string,
});

Days.propTypes = {
  activeDay: number,
  setActiveDay: func,
  dailyData: shape({
    current: shape({
      clouds: number,
      dew_point: number,
      dt: number,
      feels_like: number,
      humidity: number,
      pressure: number,
      sunrise: number,
      sunset: number,
      temp: number,
      uvi: number,
      visibility: number,
      weather: arrayOf(descriptioniconidmainShape),
      wind_deg: number,
      wind_gust: number,
      wind_speed: number,
    }),
    daily: arrayOf(
      shape({
        clouds: number,
        dew_point: number,
        dt: number,
        feels_like: shape({
          day: number,
          eve: number,
          morn: number,
          night: number,
        }),
        humidity: number,
        moon_phase: number,
        moonrise: number,
        moonset: number,
        pop: number,
        pressure: number,
        rain: number,
        sunrise: number,
        sunset: number,
        temp: shape({
          day: number,
          eve: number,
          max: number,
          min: number,
          morn: number,
          night: number,
        }),
        uvi: number,
        weather: arrayOf(descriptioniconidmainShape),
        wind_deg: number,
        wind_gust: number,
        wind_speed: number,
      })
    ),
    hourly: arrayOf(
      shape({
        clouds: number,
        dew_point: number,
        dt: number,
        feels_like: number,
        humidity: number,
        pop: number,
        pressure: number,
        temp: number,
        uvi: number,
        visibility: number,
        weather: arrayOf(descriptioniconidmainShape),
        wind_deg: number,
        wind_gust: number,
        wind_speed: number,
      })
    ),
    lat: number,
    lon: number,
    minutely: arrayOf(
      shape({
        dt: number,
        precipitation: number,
      })
    ),
    timezone: string,
    timezone_offset: number,
  }),
};

Days.defaultProps = {
  activeDay: 0,
  setActiveDay: () => {},
  dailyData: null,
};

export default Days;
