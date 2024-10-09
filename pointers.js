//basic or most common approach
// solution 1
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// time complexity = o(n^2)
// space complexity = o(1)
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

//solution 2
function pointer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[arr.length - 1 - i] === 0) {
      return [arr[i], arr[arr.length - 1 - i]];
    }
  }
}
// time complexity = o(n)
// space complexity = o(1)
// console.log(pointer([-3, -2, -1, 0, 1, 2, 3]));

//solution 3
function pointerSumZero(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
}
// time complexity = o(n)
// space complexity = o(1)
// console.log(pointerSumZero([-3, -2, -1, 0, 1, 2, 3]));

function unsortedSumZero(arr) {
  let sortedArr = arr.slice().sort();
  let i = 0;
  let j = sortedArr.length - 1;
  while (i < j) {
    let sum = sortedArr[i] + sortedArr[j];
    if (sum === 0) {
      return [sortedArr[i], sortedArr[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
}

// console.log(unsortedSumZero([3, 4, 1, 7, 2, 9, 0, -4, 8, 10, 11, 12]));

//countUnique vals
function unique(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(unique([1, 1, 1, 1, 2, 3, 6, 6, 7, 7, 7, 7, 7]));
function arrunique(arr) {
  let newar = [];
  for (let i = 0; i < arr.length; i++) {
    if (newar.length === 0 || arr[i] !== newar[newar.length - 1]) {
      newar.push(arr[i]);
    }
  }
  return newar.length;
}

// console.log(arrunique([1, 1, 1, 1, 2, 3, 6, 6, 7, 7, 7, 7, 7]));
function objunique(arr) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (newObj[arr[i]]) {
      newObj[arr[i]]++;
    } else {
      newObj[arr[i]] = 1;
    }
  }
  let countKeys = Object.keys(newObj);
  return countKeys.length;
}

// console.log(objunique([1, 1, 1, 1, 2, 3, 6, 6, 7, 7, 7, 7, 7]));
