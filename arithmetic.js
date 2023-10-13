function arithmetic(arr, l) {
  let result, compare;

  if ((arr[0] + arr[l - 1]) % 2 === 0) {
    compare = ((arr[0] + arr[l - 1]) / 2) * (l + 1);
  } else {
    compare = ((l + 1) / 2) * (arr[0] + arr[l - 1]);
  }

  result = compare - arr.reduce((a, b) => a + b, 0);

  return result;
}

console.log(arithmetic([2, 4, 8, 10, 12, 14], [2, 4, 8, 10, 12, 14].length));
