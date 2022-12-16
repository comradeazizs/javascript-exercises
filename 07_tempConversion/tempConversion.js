const convertToCelsius = function (tempInKel) {
  return Math.round((tempInKel - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function (tempInCel) {
  return Math.round((tempInCel * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
