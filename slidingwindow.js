function slidingWindow(arr, num) {
  if (num > arr.length) {
    return false;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//O(N^2) complexity

function refactorSlidingWIndow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return false;
  }
  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    //example if tempsum is 17 that becomes
    //17= 17 -arr[4-3] + arr[4] = 17-6+1 =12
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(refactorSlidingWIndow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
