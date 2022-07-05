import { useEffect, useState } from "react";

import { capitalizeFirstLetter } from "./Utils";

import { getInitCurrentDay, getInitDaily } from "./JSONInits";

import CurrentDay from "./components/CurrentDay";
import Days from "./components/Days";
import Details from "./components/Details";

const CURRENT_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const DAILY_API_URL = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "94ce2d9e62715a88d0e0ed793fd87fb9";

function App() {
  const [currentDayData, setCurrentDayData] = useState(getInitCurrentDay());

  const [dailyData, setDailyData] = useState(getInitDaily());

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  // Супер, молодец!
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const currentResponse = await fetch(
        // В переменную url
        `${CURRENT_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
      );
      // Лучше не "экономить" на переменных и записывать значения сначала в них
      setCurrentDayData(await currentResponse.json());

      const dailyResponse = await fetch(
        `${DAILY_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
      );
      setDailyData(await dailyResponse.json());
    }

    fetchData();
    // lon забыл
  }, [lat]);

  const [activeDay, setActiveDay] = useState(0);
  // Все вычисляемые свойства должны быть в переменных. Не в разметке

  return (
    <div className="container">
      <CurrentDay
        temp={Math.round(currentDayData.main.temp)}
        city={currentDayData.name}
        condition={capitalizeFirstLetter(currentDayData.weather[0].description)}
        conditionCode={currentDayData.weather[0].icon}
      />
      <div className="days-and-details">
        <Days
          activeDay={activeDay}
          setActiveDay={setActiveDay}
          dailyData={dailyData}
        />
        <Details
          feelsTemp={Math.round(dailyData.daily[activeDay].feels_like.day)}
          humidity={dailyData.daily[activeDay].humidity}
          atmPressure={Math.round(
            dailyData.daily[activeDay].pressure / 1.33322387415
          )}
          windSpeed={Math.round(dailyData.daily[activeDay].wind_speed)}
          riseTime={new Date(
            dailyData.daily[activeDay].sunrise * 1000
          ).toLocaleTimeString("ru", {
            timeStyle: "short",
          })}
          dawnTime={new Date(
            dailyData.daily[activeDay].sunset * 1000
          ).toLocaleTimeString("ru", {
            timeStyle: "short",
          })}
        />
      </div>
    </div>
  );
}

export default App;
