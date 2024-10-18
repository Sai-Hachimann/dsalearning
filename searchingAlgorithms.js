function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    let indexValue = 0;
    if (arr[i] === num) {
      indexValue = i;
      return indexValue;
    }
  }
  return -1;
}

// console.log(linearSearch([1, 3, 6, 9, 12, 15, 18], 6));

function linearSearchIndex(arr, num) {
  let indexValue = arr.indexOf(num);
  if (indexValue) {
    return indexValue;
  } else {
    return -1;
  }
}
// console.log(linearSearchIndex([1, 3, 6, 9, 12, 15, 18], 6));

function linearSearchFindIndex(arr, num) {
  let indexValue = arr.findIndex((val) => val === num);
  if (indexValue) {
    return indexValue;
  } else {
    return -1;
  }
}
// console.log(linearSearchFindIndex([1, 3, 6, 9, 12, 15, 18], 15));

//Binary search
function binarysearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currentVal = arr[mid];
    if (currentVal < num) {
      min = mid + 1;
    } else if (currentVal > num) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// console.log(binarysearch([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], 15));

function binarySearchAlt(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== num && start <= end) {
    if (arr[middle] > num) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === num) {
    return middle;
  } else {
    return -1;
  }
}

// console.log(binarySearchAlt([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], 15));

function binarySearchAlt2(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== num && start <= end) {
    if (arr[middle] > num) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

// console.log(
//   binarySearchAlt2([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], 15)
// );

//string search (substring in a larger string)
function stringSearch(str1, str2) {
  if (str2.length > str1.length) {
    return null;
  }

  let count = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    count[letter] ? (count[letter] += 1) : (count[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!count[letter]) {
      return false;
    } else {
      count[letter] -= 1;
    }
  }
}

// console.log(stringSearch('hellothere', 'the'));

function reverseArray(arr) {
  let newArr = [];
  let arrayLength = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
    arrayLength = newArr.length;
  }
  return { newArr, arrayLength };
}

console.log(reverseArray([1, 2, 3, 4]));

function hourglassSum(arr) {
  let maxSum = -Infinity; // Start with the smallest possible number

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      const result =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      if (result > maxSum) {
        maxSum = result; // Update maxSum if the current result is greater
      }
    }
  }

  return maxSum; // Return the maximum hourglass sum
}
const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 1, 1, 2, 4, 0],
];
console.log(hourglassSum(arr));

function stringSearchAlt(str1, str2) {
  if (str1.length < str2.length) {
    return null;
  }

  let str1Count = {};
  let str2Count = {};
  let count = 0;

  for (let val of str1) {
    str1Count[val] = (str1Count[val] || 0) + 1;
  }

  for (let val of str2) {
    str2Count[val] = (str2Count[val] || 0) + 1;
  }

  const str1length = Object.keys(str1Count);
  const str2length = Object.keys(str2Count);

  for (let i = str1length.length - 1; i >= 0; i--) {
    for (let j = str2length.length - 1; j >= 0; j--) {
      if (str2length[j] === str1length[i]) {
        count++;
        str2length.splice(j, 1);
        break;
      }
    }
  }

  if (str2length.length === 0) {
    console.log('All characters are present in str1');
  } else {
    console.log('Not all characters are present in str1');
  }
  return count;
}

console.log(stringSearchAlt('them', 'then'));
