import { useEffect, useState } from "react";

import { capitalizeFirstLetter } from "./Utils";

import CurrentDay from "./components/CurrentDay";
import Days from "./components/Days";
import Details from "./components/Details";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "94ce2d9e62715a88d0e0ed793fd87fb9";

function App() {
  const [currentDayData, setCurrentDayData] = useState({
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 282.55,
      feels_like: 281.86,
      temp_min: 280.37,
      temp_max: 284.26,
      pressure: 1023,
      humidity: 100,
    },
    visibility: 10000,
    wind: {
      speed: 1.5,
      deg: 350,
    },
    clouds: {
      all: 1,
    },
    dt: 1560350645,
    sys: {
      type: 1,
      id: 5122,
      message: 0.0139,
      country: "US",
      sunrise: 1560343627,
      sunset: 1560396563,
    },
    timezone: -25200,
    id: 420006353,
    name: "Mountain View",
    cod: 200,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${API_URL}?lat=54.2198&lon=49.6212&appid=${API_KEY}&units=metric&lang=ru`
      );
      const data = await response.json();
      setCurrentDayData(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(currentDayData);
  }, [currentDayData]);

  return (
    <div className="container">
      <CurrentDay
        temp={currentDayData.main.temp}
        city={currentDayData.name}
        condition={capitalizeFirstLetter(currentDayData.weather[0].description)}
      />
      <div className="days-and-details">
        <Days />
        <Details />
      </div>
    </div>
  );
}

export default App;
