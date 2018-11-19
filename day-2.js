/*
Given an array of integers, return a new array such that each element at 
index i of the new array is the product of all the numbers in the original 
array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24]. 

If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

const array = [1, 2, 3, 4, 5];

function returnProductArray(input) {
  var res = [];
  var totalProduct = 1;
  //calculate the total product
  for (var i = 0; i < input.length; i++) {
    totalProduct = totalProduct * input[i];
    console.log(totalProduct);
  }
  //populate the result array by "dividing" each value
  for (var i = 0; i < input.length; i++) {
    var timesSubstracted = 0;
    var divisor = input[i];
    var dividend = totalProduct;
    while (divisor <= dividend) {
      dividend = dividend - divisor;
      timesSubstracted++;
    }
    res.push(timesSubstracted);
  }
  return res;
}

returnProductArray(array);
