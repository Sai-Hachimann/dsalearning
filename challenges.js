function averagePair(arr, num) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = (arr[i] + arr[j]) / 2;

    if (sum === num) {
      //return true;
      return [arr[i], arr[j]];
    } else if (sum > num) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));

function areThereDuplicates(...arr) {
  let obj = {};
  for (let val of arr) {
    obj[val] = ++obj[val] || 1;
  }
  for (let val in obj) {
    if (obj[val] > 1) {
      return true;
    }
  }
  return false;
}

function isSubsequence(str1, str2) {
  let str1Count = {};
  let str2Count = {};

  for (let val of str1) {
    str1Count[val] = (str1Count[val] || 0) + 1;
  }
  for (let val of str2) {
    str2Count[val] = (str2Count[val] || 0) + 1;
  }

  for (let key in str1Count) {
    if (!(key in str2Count)) {
      return false;
    }
  }

  return true;
}

// isSubsequence('abc', 'abracadabra');
// console.log(isSubsequence('sing', 'sting'));

function altSubSequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length) {
    str1[i] === str2[j] ? i++ : j++;
    if (j === str2.length) return false;
  }
  return true;
}

console.log(altSubSequence('sing', 'sting'));

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return false;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  // console.log(tempSum);
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log(tempSum);
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));

function minSubArrayLen(arr, num) {
  let sum = 0;
  let start = 0;
  let tempSum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= num) {
      tempSum = Math.min(tempSum, i - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return tempSum === Infinity ? 0 : tempSum;
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));

function altfindLongestSubstring(str) {
  let num = 0;
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] >= 1) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      num++;
    }
  }
  return num;
}

// console.log(findLongestSubstring('rithmschool'));
function findLongestSubstring([...string]) {
  // temp object to store characters with their index.
  // so if we found duplicate key in object, we can directly
  //set i to that index + 1;

  let tempObj = {};
  let longestStr = 0;

  for (let i = 0; i < string.length; i++) {
    // get element from array
    let el = string[i];
    // if element is not present in object key, then add el as key and its index as value.
    if (!tempObj[el]) tempObj[el] = i;
    // if we found present element in object, then take its value(index) and mark our
    // i from there, and clear temp object.
    // example, [a,b,c,d,b]--> this case,
    // we check what the b key in object value is, in this case 1.
    // we directly set i = 1 and start loop from c element.
    else {
      i = tempObj[el];
      tempObj = {};
    }
    longestStr = Math.max(longestStr, Object.keys(tempObj).length);
  }
  return longestStr;
}
