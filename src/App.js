// import { useEffect } from "react";

import Days from "./components/Days";
import CurrentDay from "./components/CurrentDay";

// const API_URL = "https://api.openweathermap.org/data/3.0/onecall";
// const API_KEY = "94ce2d9e62715a88d0e0ed793fd87fb9";
/*
async function callApi() {
  const response = await fetch(
    `${API_URL}?lat=54.2198&lon=49.6212&appid=94ce2d9e62715a88d0e0ed793fd87fb9&units=metric&lang=ru`
  );
  const data = await response.json();
  console.log(data);
} */

function App() {
  /* useEffect(() => {
    callApi();
  }); */

  return (
    <div className="container">
      <CurrentDay temp={4} />
      <Days />
    </div>
  );
}

export default App;
