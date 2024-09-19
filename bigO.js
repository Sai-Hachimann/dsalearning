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
