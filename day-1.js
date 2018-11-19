/** 
  
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

 * */
const array = [10, 15, 3, 7];

function checkSum(array, val) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === val) {
        result = array[i] + array[j];
      }
    }
  }
  return result ? result : "No result found";
}

console.log(checkSum(array, 10));
