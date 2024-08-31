const arrayFruit = ['juice', 'apple', 'mango', 'grapes', 'oranges'];

/*Big O notation for array operations
lookup = O(1)
Push = O(1)
Delete = O(n)
Insert = O(n) */

//count number of characters in an entered string
function charCount(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    let count = str[i].toLowerCase();
    console.log(count);
    if (result[count] > 0) {
      result[count]++;
    } else {
      result[count] = 1;
    }
  }
  return result;
}
console.log(charCount('hii how are you'));

//frequency counters
//naive approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indeOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
