const CURRENT_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const DAILY_API_URL = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "94ce2d9e62715a88d0e0ed793fd87fb9";

async function getCurrentDayData(lat, lon) {
  const currentResponse = await fetch(
    `${CURRENT_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
  );
  return currentResponse.json();
}

async function getDailyData(lat, lon) {
  const dailyResponse = await fetch(
    `${DAILY_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
  );
  return dailyResponse.json();
}

export { getCurrentDayData, getDailyData };
