const sumLargestNumbers = function(data) {
  let sum = 0;
  for (const element of data) {
    sum += element;
  }
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));