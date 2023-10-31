function check() {
  let input = document.getElementById("in").value;
  let place = document.getElementById("name");
  let degree = document.getElementById("deg");
  let speed = document.getElementById("speed");
  let percent = document.getElementById("percent");
  let sunrise = document.getElementById("sunr");
  let sunset = document.getElementById("suns");
  let pressure=document.getElementById("pressure");
  let latitude=document.getElementById("lat");
  let langtued=document.getElementById("lan");
  let templow=document.getElementById("low");
  let temhigh=document.getElementById("high");
  let country=document.getElementById("country");
 


  let apiKey = "abfb86abccda2c5e81cea590206112a7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      place.innerHTML = data.name;
      degree.innerHTML = Math.floor(data.main.feels_like - 273) + "°C";
      speed.innerHTML = data.wind.speed +"km/h";
      percent.innerHTML=data.main.humidity+ "gm/kg"
      sunrise.innerHTML=data.sys.sunrise
      sunset.innerHTML=data.sys.sunset
      pressure.innerHTML=data.coord.lat
      latitude.innerHTML=data.main.pressure
      langtued.innerHTML=data.coord.lon
      templow.innerHTML=data.main.temp_min
      temhigh.innerHTML=data.main.temp_max
      country.innerHTML=data.sys.country
    });
}
