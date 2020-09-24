const searchInput = document.querySelector('.city-search')
const searchButton = document.querySelector(".submitButton")
searchButton.addEventListener('click', () => {
  const place = searchInput.value
  if (place == null) return
  // const latitude = place.geometry.location.lat()
  // const longitude = place.geometry.location.lng()
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=7926e70ed5bbf39fcace34574009f4f7`;
  fetch(weatherUrl,   
   
  ).then(res => res.json()).then(data => {
    setWeatherData(data, place)
  console.log(data)
   })
})

const icon = new Skycons({ color: '#222' })
const locationElement = document.querySelector('.location')
const statusElement = document.querySelector('[data-status]')
const temperatureElement = document.querySelector('.temperature')
const precipitationElement = document.querySelector('.humidity')
const windElement = document.querySelector('.wind')
icon.set('icon', 'Clouds')
icon.play()

function setWeatherData(data, place) {
  locationElement.textContent = place
  // statusElement.textContent = data.summary
  temperatureElement.textContent = data.main.temp
  precipitationElement.textContent = `${data.main.humidity} %`
    windElement.textContent = data.wind.speed
  //  icon.set('icon', data.icon)
  //  icon.play()
}