
// // Asynchronous function to fetch weather data for Seattle
// async function fetchWeatherData() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '78bbc71c6dmsh3f3f5a6c4886ac5p1acfe0jsn31229194ddba',
//       'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
//   };
  
//    const  getWeather = (city)=>{
//     fetchWeatherData();
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
//     cityName.innerHTML = city
//     try {
//       const response =  fetch(url, options)
//         // fetch(url, options)
//         // const result = await response.json() // Assuming the response is JSON formatted
//         .then(response => await response.json())
//         .then((response) => {
  
//           // console.log(result);
//           cloud_pct.innerHTML = response.cloud_pct
//           temp.innerHTML = response.temp
//           feels_like.innerHTML = response.feels_like
//           humidity.innerHTML = response.humidity
//           min_temp.innerHTML = response.min_temp
//           max_temp.innerHTML = response.max_temp
//           wind_speed.innerHTML = response.wind_speed
//           wind_degrees.innerHTML = response.wind_degrees
//           sunrise.innerHTML = response.sunrise
//           sunset.innerHTML = response.sunset
//         })
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   }
// }
// SubmitEvent.addEventListener("click", (e)=>{
//   e.preventDefault()
//   getWeather(city.value)
// })

// getWeather("Delhi")

// // Call the function to execute the fetch operation

// Asynchronous function to fetch weather data
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '78bbc71c6dmsh3f3f5a6c4886ac5p1acfe0jsn31229194ddba',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
async function fetchWeatherData(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city;
  cityName.innerHTML = city;

  try {
  const response =  fetch(url, options)
  .then(response => response.json())
  .then((response) => {

          // cloud_pct.innerHTML = response.cloud_pct
          temp.innerHTML = response.temp
          feels_like.innerHTML = response.feels_like
          humidity.innerHTML = response.humidity
          min_temp.innerHTML = response.min_temp
          max_temp.innerHTML = response.max_temp
          wind_speed.innerHTML = response.wind_speed
          wind_degrees.innerHTML = response.wind_degrees
          sunrise.innerHTML = response.sunrise
          sunset.innerHTML = response.sunset
        })
      }
        
       catch (error) {
        console.error('Error fetching weather data:', error);
      }
}
  
    // Event listener for the submit event
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      // const city = cityName.value; // Assuming you have an input field for city
      fetchWeatherData(city.value);
    });


// Initial call to fetch weather data for Delhi
fetchWeatherData("Patna");

