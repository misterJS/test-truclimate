function brickPattern(arr) {
  let result = [];

  if (arr.length > 50) {
    return "too much array";
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      break;
    }
    result.push(arr[i]);
  }

  return result;
}

console.log(brickPattern([1,2,3,0]));