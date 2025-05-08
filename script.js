let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function cel_To_Far_and_Kel() {
  let celsiusToFahrenheit = (parseFloat(celsius.value) * 9) / 5 + 32;
  let celsiusToKelvin = parseFloat(celsius.value) + 273.15;
  fahrenheit.value = parseFloat(celsiusToFahrenheit.toFixed(2));
  kelvin.value = parseFloat(celsiusToKelvin.toFixed(2));
}

function far_To_Cel_and_Kel() {
  let fahrenheitToCelsius = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  let fahrenheitToKelvin = fahrenheitToCelsius + 273.15;
  celsius.value = parseFloat(fahrenheitToCelsius.toFixed(2));
  kelvin.value = parseFloat(fahrenheitToKelvin.toFixed(2));
}

function kel_To_Cel_and_Far() {
  let kelvinToCelsius = parseFloat(kelvin.value) - 273.15;
  let kelvinToFahrenheit = (kelvinToCelsius * 9) / 5 + 32;
  celsius.value = parseFloat(kelvinToCelsius.toFixed(2));
  fahrenheit.value = parseFloat(kelvinToFahrenheit.toFixed(2));
}
