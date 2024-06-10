const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "6ce1629c37msh92141a3641489d3p19338ajsnea3d63de3323",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city)=>{
	cityName.innerHTML = city
fetch(url + city, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
	temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
	feels_like2.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
	humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
	wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
