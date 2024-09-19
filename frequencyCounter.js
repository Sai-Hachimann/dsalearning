//frequency counters
//normal approach
function same(arr1, arr2) {
  //edge case checks if the length is same if not it exits immediately
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //checking index of if i = 0 => arr[0]**2=> 1**2 =1 checks for value of 1 in arr2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    //checking if the value exists if not it returns false if true it goes below
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2); //here you can see splice in action
    //arr2[1]=1 so arr.splice(1,1)=> arr2 => [4,9,36] it goes till it empties array
    //or has a non matching value and exits
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// console.log(same([1, 2, 3, 6], [4, 1, 9, 36]));

// frequency counter O(n) complexity-time
function reSame(arr1, arr2) {
  //edge case checks if the length is same if not it exits immediately
  if (arr1.length !== arr2.length) {
    return false;
  }
  //2 variable initializations
  let counter1 = {};
  let counter2 = {};
  // for loop with if condition
  for (let val of arr1) {
    if (counter1[val]) {
      counter1[val] += 1;
    } else {
      counter1[val] = 1;
    }
  }
  // for loop with a better approach
  // checks if counter2[val] exists and is truthy If it does
  // it uses that value
  // if not, it defaults to 0 Then, it increments the value by 1
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  //for in loop the object created has key val pairs
  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter1[key ** 2] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(reSame([1, 2, 3, 6], [4, 1, 9, 36]));
//counter1 = {1:1,2:1,3:1,6:1} counter2 = {4:1, 1:1, 9:1, 36:1}
//anagram
// 2 strings with same letters with no specific order
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Count = {};
  let str2Count = {};

  for (let val of str1) {
    str1Count[val] = (str1Count[val] || 0) + 1;
  }
  for (let val of str2) {
    str2Count[val] = (str2Count[val] || 0) + 1;
  }
  for (let val in str1Count) {
    if (!(val in str2Count)) {
      return false;
    }
    if (str2Count[val] !== str1Count[val]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('hello', 'lelho'));
