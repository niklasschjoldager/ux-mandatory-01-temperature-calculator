const form = document.querySelector(".js-calculator-form")
const selectFromType = document.querySelector(".js-select-from-type")
const selectToType = document.querySelector(".js-select-to-type")
const inputDegrees = document.querySelector(".js-input-degrees")
const resultText = document.querySelector(".js-result")
const degreeTypeError = document.querySelector(".js-degree-type-error")

form.addEventListener("submit", handleCalculator)

function handleCalculator(event) {
  event.preventDefault()
  const { fromType, toType, degrees } = getUserInputs()

  degreeTypeError.classList.add("is-hidden")
  if (fromType === toType) return degreeTypeError.classList.remove("is-hidden")

  const result = getTemperatureCalculation(fromType, toType, degrees)
  displayResult(fromType, toType, degrees, result)
}

function getTemperatureCalculation(from, to, degrees) {
  if (from === "celsius" && to === "kelvin") return convertCelsiusToKelvin(degrees)
  if (from === "kelvin" && to === "celsius") return convertKelvinToCelsius(degrees)
  if (from === "fahrenheit" && to === "celsius") return convertFahrenheitToCelcius(degrees)
  if (from === "celsius" && to === "fahrenheit") return convertCelsiusToFahrenheit(degrees)
  if (from === "fahrenheit" && to === "kelvin") return convertFahrenheitToKelvin(degrees)
  if (from === "kelvin" && to === "fahrenheit") return convertKelvinToFahrenheit(degrees)

  return "Error, dont know how to calculate this"
}

function displayResult(from, to, degrees, result) {
  const formattedFrom = from.charAt(0).toUpperCase()
  const formattedTo = to.charAt(0).toUpperCase()
  resultText.innerHTML = `${+degrees.toFixed(2)}&deg;${formattedFrom} = ${+result.toFixed(2)}&deg;${formattedTo}`
}

function getUserInputs() {
  const fromType = selectFromType.value
  const toType = selectToType.value
  const degrees = parseFloat(inputDegrees.value)
  return { fromType, toType, degrees }
}

function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15
}

function convertKelvinToCelsius(kelvin) {
  return kelvin - 273.15
}

function convertFahrenheitToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

function convertCelsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32
}

function convertFahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 + 273.15
}

function convertKelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32
}
