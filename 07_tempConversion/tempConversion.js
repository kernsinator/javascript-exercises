const convertToCelsius = function(inputValue) {
  let celsiusTemp = ((inputValue - 32) * (5/9)).toFixed(1);
  if (celsiusTemp == 0) {
    return parseInt(celsiusTemp);
  }
  return parseFloat(celsiusTemp);
};

const convertToFahrenheit = function(inputValue) {
  let fahrenheitTemp = ((inputValue * (9 / 5)) + 32).toFixed(1);
  if (fahrenheitTemp == 0) {
    return parseInt(fahrenheitTemp);
  }
  return parseFloat(fahrenheitTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
