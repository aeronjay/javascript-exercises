const convertToCelsius = function(F) {
  let C = ((F - 32) * 5) / 9;

  if(Number.isInteger(C)){
    return parseInt(C);
  }else{
    return parseFloat(C.toFixed(1));
  }
};

const convertToFahrenheit = function(C) {
  
  let F = ((C * 9) / 5) + 32;

  if(Number.isInteger(F)){
    return parseInt(F);
  }else{
    return parseFloat(F.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
