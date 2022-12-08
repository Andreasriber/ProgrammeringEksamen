

async function getWeather() {
  const url =
  "https://api.open-meteo.com/v1/forecast?latitude=55.6761&longitude=12.5689&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,snowfall_sum,windspeed_10m_max&timezone=Europe%2FBerlin";
  const data = await fetch(url);
  return data.json();
}

getWeather().then((dataAll) => {

function setReadMoreLink(){
  document.getElementById("weatherTodayReadMore").addEventListener("click", (e) => {
      window.location.href = "https://open-meteo.com/en";
    });
  document.getElementById("forecastReadMore").addEventListener("click", (e) => {
    window.location.href = "https://open-meteo.com/en";
  });
}

function setDynamicForecastNames(){
  for (i = 0; i < 7; i++) {
    let dayOfTheWeek = new Date(dataAll.daily.time[i]);
    let convertDay = dayOfTheWeek.toLocaleDateString("en-us", {
      weekday: "short",
    });
    document.getElementById(`text${i}`).innerHTML = convertDay;
  }
}

function setDynamicForecastTemp(){
  for (i = 0; i < 7; i++) {
    let averageTemp =
      (dataAll.daily.temperature_2m_max[i] +
        dataAll.daily.temperature_2m_min[i]) /
      2;
    let tempCounter = document.getElementById(`temp${i}`);
    tempCounter.innerHTML = Math.round(averageTemp) + "°";
      }
}

function setDynamicIcons(){
    for (i = 0; i < 7; i++) {
    let weatherTodayIcon = document.getElementById("weatherTodayIcon");
    let icons = document.getElementById(`icon${i}`);
    let rain = dataAll.daily.rain_sum[i];
    let snow = dataAll.daily.snowfall_sum[i];
    let wind = dataAll.daily.windspeed_10m_max[i];

    if (rain > 0.1) {
      icons.src = "../images/icons/humidity.png";
      weatherTodayIcon.src = "../images/icons/humidity.png";
    } else if (snow > 0.1) {
      icons.src = "../images/icons/snowflake.png";
      weatherTodayIcon.src = "../images/icons/snowflake.png";
    } else if (wind > 20) {
      icons.src = "../images/icons/thunder.png";
      weatherTodayIcon.src = "../images/icons/thunder.png";
    } else if ((dataAll.daily.temperature_2m_max[i] +
      dataAll.daily.temperature_2m_min[i]) /
    2 > 4) {
      icons.src = "../images/icons/sun.png";
      weatherTodayIcon.src = "../images/icons/sun.png";
    } else {
      icons.src = "../images/icons/cloudy.png";
      weatherTodayIcon.src = "../images/icons/cloudy.png";
    }
  }
}
 
function setWeatherToday(){
    let d = new Date();
    let hour = d.getHours();
    let apiHour = dataAll.hourly.temperature_2m[hour];

    document.getElementById("todayTemp").innerHTML = apiHour + "°";
    document.getElementById("location").innerHTML = "Copenhagen, Denmark";

}
 
function setSunriseSunset(){
    document.getElementById("sunriseIcon").src = "../images/icons/sunrise.png";
    document.getElementById("sunsetIcon").src = "../images/icons/sunset.png";

    let sunriseToday = dataAll.daily.sunrise[0];
    let sunsetToday = dataAll.daily.sunset[0];

    document.getElementById("sunriseTime").innerHTML =
      sunriseToday.slice(11, 16) + " am";
    document.getElementById("sunsetTime").innerHTML =
      sunsetToday.slice(11, 16) + " pm";
}
  



function setWeatherContent(){
  setReadMoreLink();
  setDynamicForecastNames();
  setDynamicForecastTemp();
  setDynamicIcons();
  setWeatherToday();
  setSunriseSunset();
}
setWeatherContent();

});