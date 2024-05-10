function getFahrenheit(celcius){

  let   fahrenheit = (celcius * 9/5) + 32

  return `The Fahrenheit equivalent of ${celcius}°C is ${fahrenheit}°F`;
}

console.log(getFahrenheit(40))
